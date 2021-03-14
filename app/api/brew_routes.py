from flask import Blueprint, jsonify, request, Response
from flask_login import login_required
from app.forms import BrewForm
from app.models import db, Brew, Photo
from datetime import datetime 
import json

brew_routes = Blueprint('brews', __name__)


@brew_routes.route('/get/<int:id>')
def get_brew(id):
    brew = Brew.query.get(id)
    return brew.to_dict()


@brew_routes.route('/get')
def get_brews():
    brews = Brew.query.all()
    data = [brew.to_dict() for brew in brews]
    res = jsonify(data)
    return res


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
            description=form.data['description'],
            original_grav=form.data['original_grav'],
            final_grav=form.data['final_grav'],
            ferm_temp=form.data['ferm_temp'],
            primary_len=form.data['primary_len'],
            secondary_len=form.data['secondary_len'],
            abv=form.data['abv'],
            ibu=form.data['ibu'],
            srm=form.data['srm'],
            grain_bill=form.data['grain_bill'],
            hop_list=form.data['hop_list'],
            yeast=form.data['yeast'],
            instructions=form.data['instructions'], 
            created_at=datetime.now(),
            updated_at=datetime.now()       
        )

        db.session.add(brew)
        db.session.commit()
        
        return brew.to_dict()
    return form.errors    


@brew_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_brew(id):
        brew = Brew.query.get(id)

            
        brew.style=request.get_json()['style'],
        brew.brew_name=request.get_json()['brew_name'],
        brew.description=request.get_json()['description'],
        brew.original_grav=request.get_json()['original_grav'],
        brew.final_grav=request.get_json()['final_grav'],
        brew.ferm_temp=request.get_json()['ferm_temp'],
        brew.primary_len=request.get_json()['primary_len'],
        brew.secondary_len=request.get_json()['secondary_len'],
        brew.abv=request.get_json()['abv'],
        brew.ibu=request.get_json()['ibu'],
        brew.srm=request.get_json()['srm'],
        brew.instructions=request.get_json()['instructions'], 
        brew.grain_bill=request.get_json()['grain_bill'], 
        brew.hop_list=request.get_json()['hop_list'],
        brew.yeast=request.get_json()['yeast'],
        brew.updated_at=datetime.now()       
        
        db.session.add(brew)
        db.session.commit()
        
        return brew.to_dict()
    

@brew_routes.route('/<int:id>/delete', methods=["DELETE"])
@login_required
def delete_brew(id):
    brew = Brew.query.get(id)
    photo = Photo.query.filter(Photo.brew_id == id).first()
    print('111111111111111111111', photo.to_dict())
    db.session.delete(photo)
    db.session.delete(brew)
    db.session.commit()

    return Response("{'a':'b'}", status=201, mimetype='application/json')
