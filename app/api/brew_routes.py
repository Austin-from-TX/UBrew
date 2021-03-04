from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import BrewForm
import boto3
import botocore
from ..config import Config
from ..helpers import *
from app.models import db, Brew
import json

brew_routes = Blueprint('brews', __name__)

@brew_routes.route('/new', methods=['POST'])
@login_required
def add_brew():
    form = new BrewForm()
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
    