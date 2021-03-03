from .db import db
from .brew_ingredient import BrewIngredient


class Ingredient(db.Model):
    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(25), nullable=False)
    quantity = db.Column(db.Float, nullable=False)
    unit_measure = db.Column(db.String, nullable=False)

    brew = db.relationship("Brew", secondary=BrewIngredient, back_populates="ingredient")


    def to_dict(self):
        return {
            'id' : self.id,
            'type': self.type,
            'quantity': self.quantity,
            'unit_measure': self.unit_measure
        }