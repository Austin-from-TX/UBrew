from .db import db

Follow = db.Table('follows',
    db.Column('following_user', db.Integer, db.ForeignKey("users.id"), nullable = False, primary_key = True),
    db.Column('followed_user', db.Integer, db.ForeignKey("users.id"), nullable = False, primary_key = True)
)