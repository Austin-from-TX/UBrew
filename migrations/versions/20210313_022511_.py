"""empty message

Revision ID: 31817ccdacd0
Revises: 566eab5b008f
Create Date: 2021-03-13 02:25:11.719203

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '31817ccdacd0'
down_revision = '566eab5b008f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('brews', sa.Column('grain_bill', sa.Text(), nullable=False))
    op.add_column('brews', sa.Column('hop_list', sa.Text(), nullable=False))
    op.add_column('brews', sa.Column('yeast', sa.String(length=30), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('brews', 'yeast')
    op.drop_column('brews', 'hop_list')
    op.drop_column('brews', 'grain_bill')
    # ### end Alembic commands ###
