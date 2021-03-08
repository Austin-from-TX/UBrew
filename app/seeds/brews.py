from app.models import db, Brew
 
def seed_brews():
    brews = [
        {
        "user_id": 1,
        "style": "Lager",
        "brew_name" : "Vienna Lager",
        "description" : "This is a tasty and malty Vienne style lager",
        "original_grav" : 1.58,
        "final_grav" : 1.08,
        "ferm_temp" : 42,
        "primary_len" : "2 weeks",
        "secondary_len" : "1 week",
        "abv" : 5.18,
        "ibu" : 18,
        "srm" : 6,
        "instructions" : """
            Grain Bill: 2lbs Vienna Malt
                          8lbs 2-Row Malt
                          0.5lbs Crystal Malt

            Hop List: 2oz Cascade Hops @ 60 mins
                      2oz Cascade Hops @ 30mins
                      1oz Mosaic Hops @ Flameout
                      
           Yeast: Nottingham

           Steps: Steep your grains in 5.5 gallons water at 152deg for 1.5 hours.  Remove grains and bring to a boil.  
                  As soon as it boils add your first hops addition.  At 30mins add your second hops addition.  
                  Add the last bit of Mosaic hops at flameout after the hour boil.  Reduce temp to ~70deg and add yeast.  
                  Store at 42 deg for 2 weeks before transferring to secondary for another week.  
                  After that she's ready to bottle and you can enjoy in about 3 days time! """
        },
        {
        "user_id": 1,
        "style": "IPA",
        "brew_name" : "Easy Day IPA",
        "description" : "A fruit forward taste to balance the bitterness of the hops.  Very drinkable!",
        "original_grav" : 1.72,
        "final_grav" : 1.04,
        "ferm_temp" : 72,
        "primary_len" : "1 week",
        "secondary_len" : "1 week",
        "abv" : 7.24,
        "ibu" : 23,
        "srm" : 16,
        "instructions" : """
                Grain Bill: 10lbs 2-Row Malt
                            2lbs Maris Otter 
                            1lbs Honey Malt

                Hop List: 3oz Mosaic Hops @ 60 mins  
                          3oz Mosaic Hops @ 15min

                Yeast: Pacific Ale Yeast 
                
                Steps: Boil as directed by hops additions.  Dry hop an additional 2oz Mosaic during secondary for that nice juicy taste! """
        },
        {
        "user_id": 2,
        "style": "Wheat",
        "brew_name" : "Belgian Style Wheat",
        "description" : "Excellent Belgian style Wit that pairs great with a slice of orange",
        "original_grav" : 1.45,
        "final_grav" : 1.14,
        "ferm_temp" : 75,
        "primary_len" : "2 weeks",
        "secondary_len" : "None",
        "abv" : 4.85,
        "ibu" : 12,
        "srm" : 6,
        "instructions" : """
                Grain Bill: 6lbs 2-Row Malt 
                            4lbs Wheat
                            0.5lb Carawheat

                Hop List: 2oz Simcoe Hops @ 60 mins  
                          1oz Nugget Hops @ 15min

                Yeast: German Kolsch

                Steps: Very easy to brew, just boil as directed and let ferment for 2 weeks. No need for secondary, just bottle and serve!"""
        },
        {
        "user_id": 2,
        "style": "Pale Ale",
        "brew_name" : "Demo's House Pale Ale",
        "description" : "	A balanced APA with malt flavor, and hops flavor, for a nice APA",
        "original_grav" : 1.58,
        "final_grav" : 1.10,
        "ferm_temp" : 62,
        "primary_len" : "2 weeks",
        "secondary_len" : "1 Week",
        "abv" : 4.85,
        "ibu" : 43,
        "srm" : 12,
        "instructions": """
            Grain Bill: 5 pounds pale malt 
                        3 pounds vienna malt 
                        2 pounds Munich malt 
                        0.5lbs crystal 
                        0.5lbs crystal

            Hop List: 1oz Cascade @ 60 minutes  
                      .75oz cascade @ 30 minutes 
                      1oz Cascade @ 10 minutes 
                      0.5oz Cascade @ 5 minutes 
                      0.5oz Cascade @ flameout
                      1oz cascade (dryhop)

            Yeast: American Pale

            Steps: Ferment at low ale temps (62) for two weeks, then dryhop for a week in secondary"""
        },
        {
        "user_id": 3,
        "style": "Pale Ale",
        "brew_name" : "15 Minute Pale Ale",
        "description" : "Nice hoppy aroma, piney citrusy hop flavor and aromas followed by a semi sweet malt",
        "original_grav" : 1.055,
        "final_grav" : 1.014,
        "ferm_temp" : 65,
        "primary_len" : "4 weeks",
        "secondary_len" : "1 week",
        "abv" : 4.85,
        "ibu" : 36.1,
        "srm" : 12,
        "instructions" : """
            Grain Bill : 6lbs Light Dry Malt Extract 
                         1lbs Crystal

            Hop List: 2.5oz Cascade @ 15 min  
                      1oz Cascade @ 5 min  
                      0.5oz Cascade at flameout 
                      1oz Cascade dryhop (secondary)

            Yeast: Nottingham

            Steps: A wonderful tasting hoppy yet sweet caramel flavored pale ale. 
            And since it uses Malt extract with such a big hop bill you only need to boil for 15 MINUTES!"""
        },
        {
        "user_id": 3,
        "style": "Lager",
        "brew_name" : "Mexican Style Cerveza",
        "description" : "I think of this recipe as a Mexican Vienna. Kind of a cross between Dos Equis and Negra Modelo. It's a little maltier than both but a very refreshing summertime beer!",
        "original_grav" : 1.053,
        "final_grav" : 1.010,
        "ferm_temp" : 45,
        "primary_len" : "17 days",
        "secondary_len" : "3 days @ 63deg",
        "abv" : 4.5,
        "ibu" : 29,
        "srm" : 6,
        "instructions" : """
            Grain Bill : 4 lbs Pilsen Malt 
                         3 lbs Vienna Malt 
                         1 lbs Munich Malt
                         1 lbs Corn, Flaked
                         2oz Crystal Malt
                         0.5oz Carafa Special

            Hop List: 0.5oz Northern Brewer @ 90 mins
                      1.5 oz Crystal @ 60.0 mins 
                      0.5oz Crystal @ 15.0 min

            Yeast: 1 pkg Mexican Lager (White Labs #WLP940)

            Steps: Dough In: 131 F 15 min
                   Ramp to 150 F 60 min
                   Ramp to 160 F 15 min
                   Mash Out 168 F 10 min"""
        },
        {
        "user_id": 4,
        "style": "Pilsner",
        "brew_name" : "West Coast Pilsner",
        "description" : "The concept is simple: 100% pilsner malt, heavily hopped with whirlpool and dry hops, typically the sort you'd usually use for an IPA. Sort of an IPL, sort of an Italian pilsner. Whatever it is, it's delicious and perfect for spring/summer.",
        "original_grav" : 1.055,
        "final_grav" : 1.013,
        "ferm_temp" : 55,
        "primary_len" : "1 week",
        "secondary_len" : "3 days @ 65deg",
        "abv" : 4.5,
        "ibu" : 35,
        "srm" : 5,
        "instructions" : """
            Grain Bill : 6 lb Pilsner

            Hop List: 1.5 oz. Mosaic @ Flameout
                      1 oz. Mosaic @ dry hop (3 days)
                      

            Yeast: 1pk Dry Lager Yeast (Safale W-34/70)

            Steps: Brewed BIAB to produce 3.5 gallons, then topped up with bottled distilled water at FO 
            to reach my fermenter volume. Added FO hops with the distilled water. Cold crashed beer at 35 degs
            and then kegged. """
        },
        {
        "user_id": 4,
        "style": "Stout",
        "brew_name" : "Ó Flannagáin Irish Stout",
        "description" : "Absolutely delicious. It's smooth, creamy, malty and a nice hit of chocolate. The Roasted is barely noticeable through the intense cream.",
        "original_grav" : 1.046,
        "final_grav" : 1.013,
        "ferm_temp" : 68,
        "primary_len" : "1 week",
        "secondary_len" : "2 weeks @ 64deg",
        "abv" : 5.1,
        "ibu" : 17,
        "srm" : 29,
        "instructions" : """
            Grain Bill: 6 lb Pale Malt (2 Row) 
                        1 lb Barley, Flaked 
                        1 lb Cara-Pils
                        0.75 lb Roasted Barley 
                        0.50 lb Chocolate Malt

            Hop List: 1oz Goldings @ 60mins
                      1oz East Kent @ 60mins
                      

            Yeast: 1pk Dry Lager Yeast (Safale W-34/70)

            Steps: Boil the all hops for the full hour.  Cool down, then add your yeast.  1 week in primary
            and another 2 weeks in seconday gets this brew creamy and gorgeous.  The new house favourite! """
        },
         {
        "user_id": 5,
        "style": "Stout",
        "brew_name" : "Imperial Coffee Stout",
        "description" : "One of my best beers...  Bitter Chocolate, Smooth hint of roastiness, well balanced, great mouthfeel",
        "original_grav" : 1.073,
        "final_grav" : 1.014,
        "ferm_temp" : 65,
        "primary_len" : "2 weeks",
        "secondary_len" : "2 weeks @ 64deg",
        "abv" : 7.7,
        "ibu" : 17,
        "srm" : 25,
        "instructions" : """
            Grain Bill: 13 lbs American 2-row
                        .5 lbs Carafa III
                        1 scoop of favorite coffee

            Hop List: 1oz Warrior 
                      1oz Cascade
                      2oz Cascade 

            Yeast: 1pk Irish Stout (S-05)

            Steps: Grind Carafa and coffee in a coffee grinder, then steep it in about .5 qts of cold water for a couple hours.
                   Add dark sludge to the top of the mash just before sparging"""
        },
         {
        "user_id": 5,
        "style": "Wheat",
        "brew_name" : "Waddup Wheaty",
        "description" : "Refreshing beer with a nice mouthfeel and a light clean fruitiness.",
        "original_grav" : 1.050,
        "final_grav" : 1.010,
        "ferm_temp" : 62,
        "primary_len" : "9 days",
        "secondary_len" : "None",
        "abv" : 4.6,
        "ibu" : 19,
        "srm" : 4,
        "instructions" : """
            Grain Bill: 15.5 lb 2-row malt
                        4.5 lb Wheat malt
                        0.5 lb Munich malt

            Hop List: 9 g Yakima Magnum @ 60mins
                      8 g Centennial @ 10mins
                      21 g Centennial @ flameout
                      

            Yeast: Kolsch (Wyeast 2565)

            Steps: Fermented 9 days at 62 °F. Cold crashed for 1 day, then kegged and force carbed. Very drinkable only 11 days after brewday """
        },
         {
        "user_id": 6,
        "style": "Pilsner",
        "brew_name" : "Mosaic Pilsner SMaSH ",
        "description" : "Lots of fruit on the nose thanks to the Mosaic which turns into a classic lager flavor that lingers after you take a sip",
        "original_grav" : 1.041,
        "final_grav" : 1.006,
        "ferm_temp" : 53,
        "primary_len" : "1 week",
        "secondary_len" : "1 week @ 67deg",
        "abv" : 5.4,
        "ibu" : 30,
        "srm" : 3,
        "instructions" : """
            Grain Bill: 5lbs Pilsen 
                        
            Hop List: 0.5oz Mosaic @ 60mins
                      1oz Mosaic @ flameout
                      2oz Mosaic @ dry hop (3 days)
                      

            Yeast: West European Lager (SafLager S-23)

            Steps: Ferment as detailed above, but give an extra 2 weeks to cold crash @ 33deg """
        },
        {
        "user_id": 7,
        "style": "IPA",
        "brew_name" : "Blasphemy - No Boil IPA",
        "description" : "There is no boil and zero hopping before fermentation for this beer. This results in 0 IBU. I find that the dry hop contributes enough perceived bitterness for the style.",
        "original_grav" : 1.072,
        "final_grav" : 1.011,
        "ferm_temp" : 53,
        "primary_len" : "1 week",
        "secondary_len" : "None",
        "abv" : 8.1,
        "ibu" : 0,
        "srm" : 4,
        "instructions" : """
            Grain Bill: 6 Lbs. Wheat DME
                        2 Lbs. Turbinado Sugar (Primary)
                        
            Hop List: 3 Oz. Citra (Dry Hop ~7 Days)
                      3 Oz. Mosaic (Dry Hop ~7 Days)                      

            Yeast: English Ale Yeast (Safale S-04)

            Steps: Add the dry hop addition at about 30 hours after pitching the yeast. After about a week, transfer immediately to the serving keg."""
        },
        {
        "user_id": 8,
        "style": "Pale Ale",
        "brew_name" : "Cascade/Orange Pale Ale",
        "description" : "Orange/coriander low in the profile, compliment fruitiness from Cascades.",
        "original_grav" : 1.054,
        "final_grav" : 1.013,
        "ferm_temp" : 60,
        "primary_len" : "10 days",
        "secondary_len" : "2 weeks",
        "abv" : 5.3,
        "ibu" : 30,
        "srm" : 9,
        "instructions" : """
            Grain Bill:9 lbs Maris Otter
                       1 lbs Vienna Malt
                       1 lbs Crystal Malt
                        
            Hop List: 1 oz Cascade @ 60mins
                      1 oz Cascade @ 10mins
                      1 oz Cascade @ 5mins
                      1 oz Cascade @ flameout
                                          

            Yeast: English Ale Yeast (Safale S-04)

            Steps: 2.0 oz Orange zest added during boil, boiled 10.0 min. 1 oz Coriander crushed added during boil, boiled 10 min 
            2.0 oz Cascade added dry to secondary fermenter"""
        },
        {
        "user_id": 9,
        "style": "IPA",
        "brew_name" : "Yo Bro IPA",
        "description" : "Slight Bitterness with loads of Melon/Citrus Aroma.",
        "original_grav" : 1.060,
        "final_grav" : 1.012,
        "ferm_temp" : 68,
        "primary_len" : "9 days",
        "secondary_len" : "2 weeks @ 65F",
        "abv" : 5.9,
        "ibu" : 57,
        "srm" : 10,
        "instructions" : """
            Grain Bill: 11.25 lb Pale Ale Malt
                        1.00 lb Cara-Pils/Dextrine
                        0.75 lb Caramunich Malt
                        0.50 lb Honey Malt
                        
            Hop List: 0.75 oz Citra @ 60 mins
                      1oz Citra @ 10 mins
                      1oz Citra @ 5 mins
                      1oz Citra @ 1 mins
                      2oz Simcoe (Dry)
                                          

            Yeast:  American Ale (Safale S-05)

            Steps: Added 2oz of whole leaf Simcoe into secondary for 14 days, then Kegged."""
        },
        
    
    ]

    for brew in brews:
        new_brew = Brew(**brew)
        db.session.add(new_brew)
    
    db.session.commit()

def undo_brews():
    db.session.execute('TRUNCATE brews RESTART IDENTITY CASCADE;')
    db.session.commit()