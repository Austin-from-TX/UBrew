"""empty message

Revision ID: a04c418278bb
Revises: 2a2c367ac04b
Create Date: 2021-03-04 23:01:46.022414

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'a04c418278bb'
down_revision = '2a2c367ac04b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('follows', sa.Column('followed_id', sa.Integer(), nullable=True))
    op.add_column('follows', sa.Column('follower_id', sa.Integer(), nullable=True))
    op.drop_constraint('follows_following_user_fkey', 'follows', type_='foreignkey')
    op.drop_constraint('follows_followed_user_fkey', 'follows', type_='foreignkey')
    op.create_foreign_key(None, 'follows', 'users', ['follower_id'], ['id'])
    op.create_foreign_key(None, 'follows', 'users', ['followed_id'], ['id'])
    op.drop_column('follows', 'followed_user')
    op.drop_column('follows', 'following_user')
    op.drop_column('photos', 'created_at')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('photos', sa.Column('created_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=False))
    op.add_column('follows', sa.Column('following_user', sa.INTEGER(), autoincrement=False, nullable=False))
    op.add_column('follows', sa.Column('followed_user', sa.INTEGER(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'follows', type_='foreignkey')
    op.drop_constraint(None, 'follows', type_='foreignkey')
    op.create_foreign_key('follows_followed_user_fkey', 'follows', 'users', ['followed_user'], ['id'])
    op.create_foreign_key('follows_following_user_fkey', 'follows', 'users', ['following_user'], ['id'])
    op.drop_column('follows', 'follower_id')
    op.drop_column('follows', 'followed_id')
    # ### end Alembic commands ###
