from flask.cli import AppGroup
from .users import seed_users, undo_users
from .brews import seed_brews, undo_brews
from .photos import seed_photos, undo_photos
from .rotations import seed_rotations, undo_rotations
from .comments import seed_comments, undo_comments
from .follows import seed_follows, undo_follows

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_brews()
    seed_photos()
    seed_rotations()
    seed_comments()
    seed_follows()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_brews()
    undo_photos()
    undo_rotations()
    undo_comments()
    undo_follows()
    # Add other undo functions here
