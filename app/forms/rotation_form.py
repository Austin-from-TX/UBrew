from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class RotationForm(FlaskForm):

    user_id=IntegerField('user_id', validators=[DataRequired()])
    brew_id=IntegerField('brew_id', validators=[DataRequired()])
    status=StringField('status', validators=[DataRequired()])
    