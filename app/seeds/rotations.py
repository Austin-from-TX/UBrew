from app.models import db, Rotation
import datetime 

def seed_rotations():
    rotations = [
        {
            "user_id" : 1, 
            "brew_id" : 1, 
            "status" : "Bottom's Up!",
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 1, 
            "brew_id" : 2, 
            "status" : 'In Primary',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 1, 
            "brew_id" : 3, 
            "status" : 'In Secondary',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 1, 
            "brew_id" : 14, 
            "status" : 'On Deck',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 2, 
            "brew_id" : 3, 
            "status" : 'Will Brew Soon...',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 2, 
            "brew_id" : 4, 
            "status" : 'Conditioning',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 2, 
            "brew_id" : 5, 
            "status" : 'On Deck',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 3, 
            "brew_id" : 5, 
            "status" : 'Conditioning',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 3, 
            "brew_id" : 6, 
            "status" : 'Will Brew Soon...',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 4, 
            "brew_id" : 7, 
            "status" : "Bottom's Up!",
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 4, 
            "brew_id" : 8, 
            "status" : 'Conditioning',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 4, 
            "brew_id" : 14, 
            "status" : 'On Deck',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 4, 
            "brew_id" : 11, 
            "status" : 'Will Brew Soon...',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 5, 
            "brew_id" : 9, 
            "status" : "Bottom's Up",
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 5, 
            "brew_id" : 10, 
            "status" : 'In Primary',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 5, 
            "brew_id" : 5, 
            "status" : 'On Deck',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 6, 
            "brew_id" : 11, 
            "status" : "Bottom's Up",
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 6, 
            "brew_id" : 11, 
            "status" : 'Conditioning',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 6, 
            "brew_id" : 11, 
            "status" : 'On Deck',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 7, 
            "brew_id" : 12, 
            "status" : 'Conditioning',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 7, 
            "brew_id" : 4, 
            "status" : 'In Secondary',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 7, 
            "brew_id" : 7, 
            "status" : 'In Primary',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 8, 
            "brew_id" : 13, 
            "status" : 'In Secondary',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 8, 
            "brew_id" : 14, 
            "status" : 'On Deck',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 9, 
            "brew_id" : 14, 
            "status" :  "Bottom's Up!",
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 9, 
            "brew_id" : 1, 
            "status" : 'Will Brew Soon...',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 9, 
            "brew_id" : 6, 
            "status" : 'Will Brew Soon...',
            'updated_at': datetime.datetime.now()
        },
        {
            "user_id" : 9, 
            "brew_id" : 5, 
            "status" : 'On Deck',
            'updated_at': datetime.datetime.now()
        },
    ]

    for rotation in rotations:
        new_rotation = Rotation(**rotation)
        db.session.add(new_rotation)

    db.session.commit()


def undo_rotations():
    db.session.execute('TRUNCATE rotations RESTART IDENTITY CASCADE;')
    db.session.commit()