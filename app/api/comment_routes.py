from flask import Blueprint, jsonify, json, request, Response
from flask_login import login_required
from app.models import Comment, Brew, db, User
from app.forms.comment_form import CommentForm
from datetime import datetime
from sqlalchemy import asc

comment_routes = Blueprint("comments", __name__)


@comment_routes.route("/<int:brew_id>")
@login_required
def comments(brew_id):
    comments = Comment.query.filter(
        Comment.brew_id == brew_id).order_by(asc(Comment.created_at)).all()
    data = [comment.to_dict() for comment in comments]
    return jsonify(data)


@comment_routes.route("/new", methods=["POST"])
@login_required
def add_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    comment_obj = request.get_json()
    user_id = comment_obj["user_id"]
    brew_id = comment_obj["brew_id"]

    if form.validate_on_submit():
        comment = Comment(
            user_id=user_id,
            brew_id=brew_id,
            comment=form.data['comment'],
            created_at=datetime.now(),
            updated_at=datetime.now()
        )

        db.session.add(comment)

        db.session.commit()

        comments = Comment.query.filter(
            Comment.brew_id == brew_id).order_by(asc(Comment.created_at)).all()
        data = [comment.to_dict() for comment in comments]
        return jsonify(data)


@comment_routes.route("/<int:id>/delete", methods=["DELETE"])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)

    brew_id = comment.brew_id

    db.session.delete(comment)
    db.session.commit()

    comments = Comment.query.filter(
        Comment.brew_id == brew_id).order_by(asc(Comment.created_at)).all()
    data = [comment.to_dict() for comment in comments]
    return jsonify(data)


@comment_routes.route("/<int:id>/edit", methods=["PUT"])
@login_required
def edit_comment(id):
    comment = Comment.query.get(id)

    brew_id = comment.brew_id

    comment.comment = request.get_json()["comment"]
    comment.updated_at = datetime.now()
    db.session.commit()

    comments = Comment.query.filter(
        Comment.brew_id == brew_id).order_by(asc(Comment.created_at)).all()
    data = [comment.to_dict() for comment in comments]
    return jsonify(data)
