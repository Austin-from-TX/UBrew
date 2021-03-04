from flask_wtf import FlaskForm
from wtforms import StringField, TextField, IntegerField, DecimalField, FileField
from wtforms.validators import DataRequired

class BrewForm(FlaskForm):

    user_id=IntegerField('user_id', validators=[DataRequired()])
    style=StringField('style', validators=[DataRequired()])
    brew_name=StringField('brew_name', validators=[DataRequired()])
    author=StringField('author', validators=[DataRequired()])
    description=TextField('description', validators=[DataRequired()])
    original_grav=DecimalField('original_grav', places=2, rounding=None, validators=[DataRequired()])
    final_grav=DecimalField('final_grav', places=2, rounding=None, validators=[DataRequired()])
    ferm_temp=IntegerField('ferm_temp', validators=[DataRequired()])
    primary_len=StringField('primary_len', validators=[DataRequired()])
    secondary_len=StringField('secondary_len', validators=[DataRequired()])
    abv=DecimalField('abv', places=1, rounding=None, validators=[DataRequired()])
    ibu=DecimalField('ibu', places=1, rounding=None, validators=[DataRequired()])
    instructions=TextField('instructions', validators=[DataRequired()])
    photo = FileField('photo', validators=[FileRequired()])