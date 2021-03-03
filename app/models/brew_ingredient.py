from .db import db

BrewIngredient = db.Table('brew_ingredients',
    db.Column('brew_id', db.Integer, db.ForeignKey("brews.id"), nullable = False, primary_key = True),
    db.Column('ingredient_id', db.Integer, db.ForeignKey("ingredients.id"), nullable = False, primary_key = True)
)