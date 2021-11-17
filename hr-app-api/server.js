require("dotenv").config();
var bcrypt = require("bcryptjs");
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const db = require("./app/models");
const Role = db.role;
const User = db.user;

//db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to recruitment application." });
});


// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });

  // add admin
  User.create({
    username: 'admin',
    email: 'admin@hr-app.com',
    password: bcrypt.hashSync('123456', 8)
  })
    .then(user => {
      user.setRoles([3])
    });

  // add moderator
  User.create({
    username: 'moderator1',
    email: 'moderator1@hr-app.com',
    password: bcrypt.hashSync('111', 8)
  })
    .then(user => {
      user.setRoles([2])
    });

  // add candidate
  User.create({
    username: 'user1',
    email: 'user1@hr-app.com',
    password: bcrypt.hashSync('111', 8)
  })
    .then(user => {
      user.setRoles([1])
    });



}