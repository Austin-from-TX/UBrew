"""empty message

Revision ID: 774b0ce48c87
Revises: ee31934907cd
Create Date: 2021-03-13 02:51:29.551755

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '774b0ce48c87'
down_revision = 'ee31934907cd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('brews', sa.Column('yeast', sa.String(length=100), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('brews', 'yeast')
    # ### end Alembic commands ###
