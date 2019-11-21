# ForgetThemNot

This web application helps users keep track of the recurring annual events in their lives, such as their loved ones' birthdays and anniversaries.<br />

## Available Scripts
Install the frontend and backend Dependencies. <br />

`cd client`<br />
`npm install`<br />

`cd server`<br />
`npm install`<br />

In the project root directory (containing the docker-compose.yml file), create an .env file (populate with values for username, password, dbname): <br />

`DB_HOST=localhost`<br />
`DB_USER=username`<br />
`DB_PASSWORD=password`<br />
`DB_NAME=dbname`<br />

For the initial build, you can run in the project root directory (containing the docker-compose.yml file):<br />

### `docker-compose up -d --build`

Client:<br />

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />

Server:<br />

Runs the api in the development mode.<br />
Use the `8081` port to send a cURL request to the container.<br />

`curl -i localhost:8081`<br />

Database:<br />

For Ubuntu 16.04 and 18.04, install PostgreSQL client. 
Use the `5432` port to interact with the database.

`apt-get install postgresql-client`<br />
`psql -h localhost -p 5432 -U <username> -d <database name>`<br />


After the initial build, you can run in the project directory (containing the docker-compose.yml file):<br />

### `docker-compose up`

See the description above for `docker-compose up -d --build`.<br />

### `docker-compose stop`

Brings down the container.<br />
