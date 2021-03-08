from app.models import db, Comment
import datetime


def seed_comments():
    comments = [
        {'user_id': 3,
        'brew_id': 1,
        'comment': 'I absolutely love this!',
        'created_at': datetime.datetime.now(),
        'updated_at': datetime.datetime.now()
        },
        {'user_id': 9,
        'brew_id': 6,
        'comment': 'Tried this out and it was amazing!',
        'created_at': datetime.datetime.now(),
        'updated_at': datetime.datetime.now()
        },
        {'user_id': 5,
        'brew_id': 6,
        'comment': 'Highly recommend',
        'created_at': datetime.datetime.now(),
        'updated_at': datetime.datetime.now()
        },
        {'user_id': 2,
        'brew_id': 2,
        'comment': 'Only had Simcoe hops on hand but this still turned out great!',
        'created_at': datetime.datetime.now(),
        'updated_at': datetime.datetime.now()
        },
        {'user_id': 1,
        'brew_id': 3,
        'comment': 'Perfect beer on a summer day',
        'created_at': datetime.datetime.now(),
        'updated_at': datetime.datetime.now()
        },
        {'user_id': 9,
        'brew_id': 9,
        'comment': 'I could stare at this for hours',
        'created_at': datetime.datetime.now(),
        'updated_at': datetime.datetime.now()
        },
        {'user_id': 7,
        'brew_id': 1,
        'comment': '4 stars! Will be brewing this again soon!',
        'created_at': datetime.datetime.now(),
        'updated_at': datetime.datetime.now()
        },
        {'user_id': 5,
        'brew_id': 14,
        'comment': 'Even the wife loves this one! ',
        'created_at': datetime.datetime.now(),
        'updated_at': datetime.datetime.now()
        },
        {'user_id': 8,
        'brew_id': 11,
        'comment': 'Brought these to a party, they were gone instantly',
        'created_at': datetime.datetime.now(),
        'updated_at': datetime.datetime.now()
        },
        {'user_id': 3,
        'brew_id': 12,
        'comment': 'Yasss!',
        'created_at': datetime.datetime.now(),
        'updated_at': datetime.datetime.now()
        },
    ]

    for comment in comments:
        new_comment= Comment(**comment)
        db.session.add(new_comment)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()