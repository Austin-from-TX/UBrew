"""empty message

Revision ID: e3ce2c3e7432
Revises: a04c418278bb
Create Date: 2021-03-06 20:14:11.282352

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e3ce2c3e7432'
down_revision = 'a04c418278bb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('brews', sa.Column('grain_bill', sa.Text(), nullable=False))
    op.add_column('brews', sa.Column('hop_list', sa.Text(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('brews', 'hop_list')
    op.drop_column('brews', 'grain_bill')
    # ### end Alembic commands ###
