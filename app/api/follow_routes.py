from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, User


follow_routes = Blueprint('follow_routes', __name__)


@follow_routes.route('/<int:id>/get')
@login_required
def get_followed(id):

    user = User.query.get(id)

    
    following = [follow.to_dict() for follow in user.followers]
    followers = [follower.to_dict() for follower in user.follows]
    

    return jsonify(following, followers)


@follow_routes.route('/<int:id>/delete', methods={'DELETE'})
@login_required
def remove_follower(id):
        
        followed_user = User.query.get(id)
        
        follower = User.query.get(request.get_json()['follower_id'])

        print('----------------', [follow.to_dict() for follow in follower.followers])
        
        follower.followers.remove(followed_user)

        db.session.commit()

        userFollows = [follow.to_dict() for follow in follower.followers]
        profFollowers = [follow.to_dict() for follow in followed_user.follows]
        

        return jsonify(userFollows, profFollowers)


@follow_routes.route('/<int:id>', methods=['POST'])
@login_required
def create_follow(id):

        data = request.get_json()
        
        follower = User.query.get(data['follower_id'])
        
        followed_user = User.query.get(id)

        existing_followers = followed_user.follows.all()
        # followed_user.followed.append(follower)
        if follower in existing_followers:
            return "User Already Follows"
                
        follower.followers.append(followed_user)

        db.session.add(followed_user)

        db.session.commit()

        userFollows = [follow.to_dict() for follow in follower.followers]
        profFollowers = [follow.to_dict() for follow in followed_user.follows]

        return jsonify(userFollows, profFollowers)

