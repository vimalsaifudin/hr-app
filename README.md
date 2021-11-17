# HR Recruitment Management Sample Application

## Run React, Nodejs, MySQL with Docker Compose

# Node.js Backend with JWT Authentication & Authorization

### Run
```
docker-compose up
```
> Docker will pull the MySQL and Node.js images (if the machine does not have it before)

The services can be run on the background with command:

```
docker-compose up -d
```

### View it in the browser

Open [http://127.0.0.1:8888](http://127.0.0.1:8888) to view it in the browser.


## Stop the Application
Stopping all the running containers is also simple with a single command:

```
docker-compose down
```

> If you need to stop and remove all containers, networks, and all images used by any service in docker-compose.yml file, use the command
Stopping all the running containers is also simple with a single command:

```
docker-compose down --rmi all
```

## Run without Docker

## User Registration, User Login and Authorization process.
> Node.js Rest APIs with Express, Sequelize & MySQL

## Project setup
```
npm install
```

### Run
```
node server.js
```

## React Application - HR Recruitment Management

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Set port
.env
```
PORT=3000
```
### Project setup

In the project directory, you can run:

```
npm install
# or
yarn install
```

or

### Compiles and hot-reloads for development

```
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.


