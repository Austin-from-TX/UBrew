from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .follow import Follow


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(25), nullable=False)
  last_name = db.Column(db.String(25), nullable=False)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)

  rotation = db.relationship("Rotation", back_populates="user")
  brew = db.relationship("Brew", back_populates="user")
  comment = db.relationship("Comment", back_populates="user")
  following_user = db.relationship("User", secondary=Follow, back_populates="followed_user")
  followed_user = db.relationship("User", secondary=Follow, back_populates="following_user")


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      'first_name': self.first_name,
      'last_name': self.last_name,
      "username": self.username,
      "email": self.email
    }
