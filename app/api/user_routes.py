from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, User, Brew, Rotation
from sqlalchemy import asc
import json

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/brews')
@login_required
def brews(id):
    brews = Brew.query.filter(Brew.user_id == id).all()
    data = [brew.to_dict() for brew in brews]
    res = jsonify(data)
    return res


@user_routes.route('/<int:id>/rotations')
@login_required
def rotations(id):
    rotations = Rotation.query.filter(Rotation.user_id == id).order_by(asc(Rotation.status)).all()
    data = [rotation.to_dict() for rotation in rotations]
    return jsonify(data)
