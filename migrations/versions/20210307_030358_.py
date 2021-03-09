"""empty message

Revision ID: 42e8fb5beeae
Revises: 88e9abac9e79
Create Date: 2021-03-07 03:03:58.858943

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '42e8fb5beeae'
down_revision = '88e9abac9e79'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('brews', 'author')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('brews', sa.Column('author', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    # ### end Alembic commands ###