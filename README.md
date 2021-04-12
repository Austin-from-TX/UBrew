![ubrew_background](https://u-brew-flask.s3-eu-west-1.amazonaws.com/splash.png)


**UBrew** is an app that allows homebrewers to connect with each other and share brewing recipes. Users can upload photos and recipes of their favorite brews. They can search for and save new brews to their rotation and can follow other brewers on the app. UBrew makes clever use of React/Redux to provide a robust user experience without relying on 3rd party packages or API's. 

### Try the live site <a href=https://ubrew.herokuapp.com/>here</a>. <b>|</b> View the database schema and feature list in the <a href="https://github.com/Austin-from-TX/UBrew/wiki">Wiki</a>.



# Tech Stack
UBrew uses the following tools, frameworks, and key packages:

### [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/) (with [PostgreSQL](https://www.postgresql.org/))
### [Flask](https://flask.palletsprojects.com/en/1.1.x/)
### [React](https://reactjs.org/)
### [Redux](https://react-redux.js.org/)
### [AWS S3](https://aws.amazon.com/s3/)
### [react-modal](https://www.npmjs.com/package/react-modal)
### Hosted on [Heroku](https://www.heroku.com)




## Running UBrew Locally

1. Clone this repository

   ```bash
   git clone https://github.com/Austin-from-TX/UBrew
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary).
***


