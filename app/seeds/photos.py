from app.models import db, Photo

def seed_photos():
    photos = [
         {'user_id': 1,
        'brew_id': 1,
        'url': 'https://craftpeak-cooler-images.imgix.net/westbrook-brewing/Vienna-Lager-1.jpg',
        },
        {'user_id': 1,
        'brew_id': 2,
        'url': 'https://www.brewersfriend.com/images/2/5/2/8/0/7/epic-pale-ale-1248.jpg',
        
        },
        {'user_id': 2,
        'brew_id': 3,
        'url': 'http://www.jaysbrewing.com/wp-content/uploads/2013/04/wheat-beer.jpg',
        
        },
        {'user_id': 2,
        'brew_id': 4,
        'url': 'https://cdn.shopify.com/s/files/1/0054/6682/files/pale_ale_insta_large.jpg?v=1547153698',
        
        },
        {'user_id': 3,
        'brew_id': 5,
        'url': 'https://cdn.homebrewersassociation.org/wp-content/uploads/Big-Brew-17-IPA.jpg',
        
        },
        {'user_id': 3,
        'brew_id': 6,
        'url': 'https://images.squarespace-cdn.com/content/v1/59cafe488a02c7560086e090/1566428012499-2Z87GF84GB32J0A4P7G6/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Pale+Mexican+Lager+from+Kulshan+Bewing',
        
        },
        {'user_id': 4,
        'brew_id': 7,
        'url': 'https://brew4fun.files.wordpress.com/2019/02/dsc_5272.jpg',
        
        },
        {'user_id': 4,
        'brew_id': 8,
        'url': 'https://i.ytimg.com/vi/Uzvog1s6s7Q/maxresdefault.jpg',
        
        },
        {'user_id': 5,
        'brew_id': 9,
        'url': 'https://drinks.seriouseats.com/assets_c/2011/06/20110605-155109-Homebrew-Dry-Stout-thumb-625xauto-164242.jpg',
        
        },
        {'user_id': 5,
        'brew_id': 10,
        'url': 'http://hoppyhacker.com/wp-content/uploads/2017/10/IMG_4179-197x300.jpg',
        
        },
        {'user_id': 6,
        'brew_id': 11,
        'url': 'https://s3-us-west-2.amazonaws.com/homebrewassoc/wp-content/uploads/2015/01/valymber-homebrew-recipe.jpg',
        
        },
        {'user_id': 7,
        'brew_id': 12,
        'url': 'https://www.homebrewtalk.com/attachments/img_0356-jpg.604889/',
        
        },
        {'user_id': 8,
        'brew_id': 13,
        'url': 'http://spoonwoodbrewing.com/wp-content/uploads/2015/07/Spoonwood-Brewing-Pale-Ale.jpg',
        
        },
        {'user_id': 9,
        'brew_id': 14,
        'url': 'https://homebrewacademy.com/wp-content/uploads/2011/05/citra-pale-ale1.jpg',
        }
    ]


    for photo in photos:
        new_photo = Photo(**photo)
        db.session.add(new_photo)

    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()