const express = require("express");
const session = require('express-session');
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const passportSetup = require("./passport");
const passport = require("passport");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const bodyParser = require("body-parser");
/* Don't Remove Import db connection */
const mongoose = require("./src/config/db");

const careerController = require("./src/controller/career.controller");
const userController = require("./src/controller/user.controller");
const petController = require("./src/controller/pet.controller");


app.use(bodyParser.json());

// Configure Express session
app.use(session({
  secret: 'codevskills',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());



app.use("/", careerController);
app.use("/", userController);
app.use("/", petController);
app.use("/auth", userController);

app.listen(PORT, () => {
  console.log(`Server listening at the PORT: ${PORT}`);
});
