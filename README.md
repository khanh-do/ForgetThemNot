# ForgetThemNot

This web application helps users keep track of the recurring annual events in their lives, such as their loved ones' birthdays and anniversaries.<br />

## Available Scripts

For the initial build, you can run in the project directory (containing the docker-compose.yml file):<br />

### `docker-compose up -d --build`

Client:<br />

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />

Server:<br />

Runs the api in the development mode.<br />
Use the `8081` port to send a cURL request to the container.<br />

`curl -i localhost:8081`<br />

After the initial build, you can run in the project directory (containing the docker-compose.yml file):<br />

### `docker-compose up`

See the description above for `docker-compose up -d --build`.<br />

### `docker-compose stop`

Brings down the container.<br />