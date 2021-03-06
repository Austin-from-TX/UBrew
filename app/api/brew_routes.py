from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import BrewForm
from app.models import db, Brew
import json

brew_routes = Blueprint('brews', __name__)


@brew_routes.route('/get/<int:id>')
def get_brew(id):
    brew = Brew.query.get(id)
    return brew.to_dict()

@brew_routes.route('/', methods=['POST'])
@login_required
def add_brew():
    form = BrewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        brew = Brew(
            user_id=form.data['user_id'],
            style=form.data['style'],
            brew_name=form.data['brew_name'],
            author=form.data['author'],
            description=form.data['description'],
            original_grav=form.data['original_grav'],
            final_grav=form.data['final_grav'],
            ferm_temp=form.data['ferm_temp'],
            primary_len=form.data['primary_len'],
            secondary_len=form.data['secondary_len'],
            abv=form.data['abv'],
            ibu=form.data['ibu'],
            srm=form.data['srm'],
            instructions=form.data['instructions'],        
        )

        db.session.add(brew)
        db.session.commit()
        return brew.to_dict()
    return form.errors     