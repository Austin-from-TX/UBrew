from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, User


follow_routes = Blueprint('follow_routes', __name__)


@follow_routes.route('/<int:id>/get')
@login_required
def get_followed(id):
    followed =  User.query.get(id).followers
    print('-------------------', followed[0].to_dict())
    data = [follow.to_dict() for follow in followed]
    return jsonify(data)



@follow_routes.route('/<int:id>')
@login_required
def get_follower(id):
        
        follower = User.query.get(id)
        return jsonify(follower.to_dict())


@follow_routes.route('/<int:id>', methods=['POST'])
@login_required
def create_follow(id):

        data = request.get_json()
        
        follower = User.query.get(data['follower_id'])
        
        followed_user = User.query.get(id)
        # followed_user.followed.append(follower)
        follower.followers.append(followed_user)

        db.session.add(followed_user)

        db.session.commit()

        return jsonify(follower.to_dict())
