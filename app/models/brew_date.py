from .db import db


class BrewDate(db.Model):
    __tablename__ = 'brew_dates'

    id = db.Column(db.Integer, primary_key=True)
    brew_id = db.Column(db.Integer, db.ForeignKey("brews.id"), nullable=False)
    brew_day = db.Column(db.DateTime, nullable=False)
    primary_end= db.Column(db.DateTime, nullable=False)
    secondary_end = db.Column(db.DateTime)
    bottling_day = db.Column(db.DateTime, nullable=False)
    drinking_day = db.Column(db.DateTime, nullable=False)

    brew = db.relationship("Brew", back_populates="brew_date", uselist=False)

    def to_dict(self):
        return {
            'id' : self.id,
            'brew_id': self.brew_id,
            'brew_day': self.brew_day,
            'primary_end': self.primary_end,
            'secondary_end': self.secondary_end,
            'bottling_day': self.bottling_day, 
            'drinking_day': self.drinking_day
        }