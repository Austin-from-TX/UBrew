from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, User, Brew, Rotation
from app.forms import RotationForm
from sqlalchemy import desc
from datetime import datetime
import json

rotation_routes = Blueprint('rotations', __name__)


@rotation_routes.route('/following/<int:id>')
@login_required
def follow_rotation(id):
    user = User.query.get(id)

    following = [follow.id for follow in user.followers]
   
    
    rotations = Rotation.query.filter(Rotation.user_id.in_(following)).order_by(desc(Rotation.updated_at)).all()
    #     feed.append(posts)
    # console.log()
   
    rotations = [{**follower.to_dict(), "rotations": [r.to_dict() for r in follower.rotations] } for follower in user.followers]
    return jsonify({"followed_rotations": rotations})

@rotation_routes.route('/add', methods=["POST"])
@login_required
def add_rotation():
    form = RotationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        rotation = Rotation(
            user_id=form.data['user_id'],
            brew_id=form.data['brew_id'],
            status=form.data['status'],
            updated_at=datetime.now()

        )
        db.session.add(rotation)
        db.session.commit()
        data = rotation.to_dict()
        return jsonify(data)


@rotation_routes.route('/<int:id>/edit', methods=["PUT"])
@login_required
def edit_status(id):
    rotation = Rotation.query.get(id)

    rotation.status = request.get_json()['status']
    rotation.updated_at = datetime.now()

    db.session.commit()
    
    user_id = request.get_json()['user_id']
   
    rotations = Rotation.query.filter(Rotation.user_id == user_id).order_by(asc(Rotation.status)).all()
    data = [rotation.to_dict() for rotation in rotations]
    return jsonify(data)


@rotation_routes.route('/<int:id>/delete', methods=["DELETE"])
@login_required
def delete_rotatation(id):
    rotation = Rotation.query.get(id)

    user_id = request.get_json()['user_id']
    
    db.session.delete(rotation)
    db.session.commit()
    
    rotations = Rotation.query.filter(Rotation.user_id == user_id).order_by(asc(Rotation.status)).all()
    data = [rotation.to_dict() for rotation in rotations]
    return jsonify(data)