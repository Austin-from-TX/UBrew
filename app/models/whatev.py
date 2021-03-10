class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(25), nullable=False)
  last_name = db.Column(db.String(25), nullable=False)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)

  rotation = db.relationship("Rotation", back_populates="user")
  brews = db.relationship("Brew", back_populates="users")
  photos = db.relationship("Photo", back_populates="user")
  comment = db.relationship("Comment", back_populates="user")
  followers = db.relationship(
        "User", 
        secondary=follows,
        primaryjoin=(follows.c.follower_id == id),
        secondaryjoin=(follows.c.followed_id == id),
        backref=db.backref("follows", lazy="dynamic"),
        lazy="dynamic"
    )

    def follow_to_dict(self):
        return: {
            "id": self.id, 
            "username": self.username,
            "rotation": [rotation.to_dict() for rotation in self.rotation],
            "followers" : {user.id: user.follow_to_dict() for user in self.followers}

        }



      def to_dict(self):
    return {
      "id": self.id,
      'first_name': self.first_name,
      'last_name': self.last_name,
      "username": self.username,
      "email": self.email,
      "followers" : {user.id: user.follow_to_dict() for user in self.followers}
    }