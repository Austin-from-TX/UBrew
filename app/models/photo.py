from .db import db


class Photo(db.Model):
    __tablename__ = 'photos'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    brew_id = db.Column(db.Integer, db.ForeignKey("brews.id"), nullable = False)
    url = db.Column(db.String(555), nullable = False, unique = True)

    user = db.relationship("User", back_populates="photos")
    brew = db.relationship("Brew", back_populates="photos")

    def to_dict(self):
        return {
        "id": self.id,
        "user_id": self.user_id,
        "brew_id": self.brew_id,
        "url": self.url,
        }
