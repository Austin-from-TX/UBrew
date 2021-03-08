"""empty message

Revision ID: 30b6d7e2fbc5
Revises: 185388896a98
Create Date: 2021-03-07 17:17:15.710502

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '30b6d7e2fbc5'
down_revision = '185388896a98'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('photos', sa.Column('url', sa.String(length=555), nullable=False))
    op.create_unique_constraint(None, 'photos', ['url'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'photos', type_='unique')
    op.drop_column('photos', 'url')
    # ### end Alembic commands ###
