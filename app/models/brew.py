from .db import db
from .brew_ingredient import BrewIngredient



class Brew(db.Model):
    __tablename__ = 'brews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    style = db.Column(db.String(25), nullable=False)
    brew_name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    original_grav = db.Column(db.Float, nullable=False)
    final_grav = db.Column(db.Float, nullable=False)
    ferm_temp = db.Column(db.Integer, nullable=False)
    primary_len = db.Column(db.String, nullable=False)
    secondary_len = db.Column(db.String)
    abv = db.Column(db.Float, nullable=False)
    ibu = db.Column(db.Float)
    srm = db.Column(db.Integer)
    grain_bill = db.Column(db.Text, nullable=False)
    hop_list = db.Column(db.Text, nullable=False)
    yeast = db.Column(db.String(100), nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)
    

    users = db.relationship("User", back_populates="brews")
    photos = db.relationship("Photo", back_populates="brew")
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
            'description': self.description,
            'original_grav': self.original_grav,
            'final_grav': self.final_grav,
            'ferm_temp': self.ferm_temp,
            'primary_len': self.primary_len,
            'secondary_len': self.secondary_len,
            'abv': self.abv,
            'ibu': self.ibu,
            'srm': self.srm,
            'grain_bill': self.grain_bill, 
            'hop_list': self.hop_list,
            'yeast': self.yeast,
            'instructions': self.instructions,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            "photos": [photo.to_dict() for photo in self.photos],
            "users": self.users.username,
           
        }