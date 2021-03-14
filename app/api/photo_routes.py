from flask import Blueprint, jsonify, request
from flask_login import login_required
import boto3
import botocore
from app.config import Config
from app.helpers import *
from datetime import datetime
from app.models import db, Photo
import json

photo_routes = Blueprint('photos', __name__)


@photo_routes.route('/', methods=["POST"])
@login_required
def add_photo():
    
    if "photo" not in request.files:
        return "No user_file key in request.files"

    file = request.files["photo"]

    if file:
        photo_url = upload_file_to_s3(file, Config.S3_BUCKET)
        photo = Photo(
            user_id=request.form.get('user_id'),
            brew_id=request.form.get('brew_id'),
            url=photo_url,
        )
        db.session.add(photo)

        db.session.commit()

        return photo.to_dict()
    else:
        return redirect("/brews/add/new")


@photo_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_photo(id):

    if "photo" not in request.files:
        return "No user_file key in request.files"

    file = request.files["photo"]

    if file:
        photo_url = upload_file_to_s3(file, Config.S3_BUCKET)

        photo = Photo.query.filter(Photo.brew_id == id).first()
        photo.url=photo_url

        
        db.session.add(photo)
        db.session.commit()

        return photo.to_dict()