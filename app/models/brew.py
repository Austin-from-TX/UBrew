from .db import db
from .brew_ingredient import BrewIngredient



class Brew(db.Model):
    __tablename__ = 'brews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    style = db.Column(db.String(25), nullable=False)
    brew_name = db.Column(db.String(25), nullable=False)
    author = db.Column(db.String(40), nullable=False)
    description = db.Column(db.Text, nullable=False)
    original_grav = db.Column(db.Float, nullable=False)
    final_grav = db.Column(db.Float, nullable=False)
    ferm_temp = db.Column(db.Integer, nullable=False)
    primary_len = db.Column(db.String, nullable=False)
    secondary_len = db.Column(db.String, nullable=False)
    abv = db.Column(db.Float, nullable=False)
    ibu = db.Column(db.Float, nullable=False)
    srm = db.Column(db.Integer, nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    photo_url = db.Column(db.String, nullable=False)

    user = db.relationship("User", back_populates="brew")
    comment = db.relationship("Comment", back_populates="brew")
    rotation = db.relationship("Rotation", back_populates="brew", uselist=False)
    brew_date = db.relationship("BrewDate", back_populates="brew", uselist=False)
    ingredient = db.relationship("Ingredient", secondary=BrewIngredient, back_populates="brew")

    
    def to_dict(self):
        return {
            'id' : self.id,
            'user_id' : self.user_id,
            'style': self.style,
            'brew_name' : self.brew_name,
            "author": self.author, 
            'description': self.description,
            'original_grav': self.original_grav,
            'final_grav': self.final_grav,
            'ferm_temp': self.ferm_temp,
            'primary_len': self.primary_len,
            'secondary_len': self.secondary_len,
            'avb': self.avb,
            'ibu': self.ibu,
            'srm': self.srm,
            'instructions': self.instructions,
            'photo_url': self.photo_url
        }