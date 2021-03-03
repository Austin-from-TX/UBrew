from .db import db


class Rotation(db.Model):
    __tablename__ = 'rotations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    brew_id = db.Column(db.Integer, db.ForeignKey("brews.id"), nullable=False)
    style = db.Column(db.String(25), nullable=False)
   
    user = db.relationship("User", back_populates="rotation")
    brew = db.relationship("Brew", back_populates="rotation")


    def to_dict(self):
        return {
            'id' : self.id,
            'user_id': self.user_id,
            'brew_id': self.brew_id,
            'style': self.style
        }