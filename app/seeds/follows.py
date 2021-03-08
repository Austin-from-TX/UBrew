from app.models import db, User
from app.models.follow import follows


def seed_follows():
    followers = [
        {"followed_id" : 2, 
        "follower_id" : 1,
        },
        {"followed_id" : 3, 
        "follower_id" : 1,
        },
        {"followed_id" : 4, 
        "follower_id" : 1,
        },
        {"followed_id" : 1, 
        "follower_id" : 2,
        },
        {"followed_id" : 5, 
        "follower_id" : 2,
        },
        {"followed_id" : 6, 
        "follower_id" : 2,
        },
        {"followed_id" : 7, 
        "follower_id" : 6,
        },
        {"followed_id" : 6, 
        "follower_id" : 7,
        },
        {"followed_id" : 8, 
        "follower_id" : 9,
        },
        {"followed_id" : 9, 
        "follower_id" : 3,
        },
    ]

    for follower in followers:
        db.session.execute(follows.insert(),
                        params=follower)

    db.session.commit()


def undo_follows():
    db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE;')
    db.session.commit()