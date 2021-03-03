from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    brew_id = db.Column(db.Integer, db.ForeignKey("brews.id"), nullable=False)
    comment = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    user = db.relationship("User", back_populates="comment")
    brew = db.relationship("Brew", back_populates="comment")


    def to_dict(self):
        return {
            'id' : self.id,
            'user_id': self.user_id,
            'brew_id': self.brew_id,
            'comment': self.comment, 
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }