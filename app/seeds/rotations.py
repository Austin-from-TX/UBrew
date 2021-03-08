from app.models import db, Rotation

def seed_rotations():
    rotations = [
        {
            "user_id" : 1, 
            "brew_id" : 1, 
            "status" : 'Drinking'
        },
        {
            "user_id" : 1, 
            "brew_id" : 2, 
            "status" : 'Primary'
        },
        {
            "user_id" : 1, 
            "brew_id" : 3, 
            "status" : 'Secondary'
        },
        {
            "user_id" : 1, 
            "brew_id" : 14, 
            "status" : 'On Deck'
        },
        {
            "user_id" : 2, 
            "brew_id" : 3, 
            "status" : 'Drinking'
        },
        {
            "user_id" : 2, 
            "brew_id" : 4, 
            "status" : 'Primary'
        },
        {
            "user_id" : 2, 
            "brew_id" : 5, 
            "status" : 'On Deck'
        },
        {
            "user_id" : 3, 
            "brew_id" : 5, 
            "status" : 'Bottled'
        },
        {
            "user_id" : 3, 
            "brew_id" : 6, 
            "status" : 'None'
        },
        {
            "user_id" : 4, 
            "brew_id" : 7, 
            "status" : 'Drinking'
        },
        {
            "user_id" : 4, 
            "brew_id" : 8, 
            "status" : 'Bottled'
        },
        {
            "user_id" : 4, 
            "brew_id" : 14, 
            "status" : 'On Deck'
        },
        {
            "user_id" : 4, 
            "brew_id" : 11, 
            "status" : 'None'
        },
        {
            "user_id" : 5, 
            "brew_id" : 9, 
            "status" : 'Drinking'
        },
        {
            "user_id" : 5, 
            "brew_id" : 10, 
            "status" : 'Fermenting'
        },
        {
            "user_id" : 5, 
            "brew_id" : 5, 
            "status" : 'On Deck'
        },
        {
            "user_id" : 6, 
            "brew_id" : 11, 
            "status" : 'Drinking'
        },
        {
            "user_id" : 6, 
            "brew_id" : 11, 
            "status" : 'Fermenting'
        },
        {
            "user_id" : 6, 
            "brew_id" : 11, 
            "status" : 'On Deck'
        },
        {
            "user_id" : 7, 
            "brew_id" : 12, 
            "status" : 'Drinking'
        },
        {
            "user_id" : 7, 
            "brew_id" : 4, 
            "status" : 'On Deck'
        },
        {
            "user_id" : 7, 
            "brew_id" : 7, 
            "status" : 'Fermenting'
        },
        {
            "user_id" : 8, 
            "brew_id" : 13, 
            "status" : 'Fermenting'
        },
        {
            "user_id" : 8, 
            "brew_id" : 14, 
            "status" : 'On Deck'
        },
        {
            "user_id" : 9, 
            "brew_id" : 14, 
            "status" : 'Drinking'
        },
        {
            "user_id" : 9, 
            "brew_id" : 1, 
            "status" : 'On Deck'
        },
        {
            "user_id" : 9, 
            "brew_id" : 6, 
            "status" : 'On Deck'
        },
        {
            "user_id" : 9, 
            "brew_id" : 5, 
            "status" : 'On Deck'
        },
    ]

    for rotation in rotations:
        new_rotation = Rotation(**rotation)
        db.session.add(new_rotation)

    db.session.commit()


def undo_rotations():
    db.session.execute('TRUNCATE rotations RESTART IDENTITY CASCADE;')
    db.session.commit()