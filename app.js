"use strict";

const express = require("express");
const { connect } = require("./connection/connection");
const bodyParser = require("body-parser");
const { initSeed } = require("./controller/profileController");
const app = express();
const port = process.env.PORT || 3001;

// set the view engine to ejs
app.set("view engine", "ejs");

// set bodyParser for JSON requests
app.use(bodyParser.json());

// routes
app.use("/profile", require("./routes/profile")());
app.use("/api/profile", require("./routes/profileApi")());

connect()
  .then(function () {
    try {
      // start server
      const server = app.listen(port);
      initSeed();
      console.log("Express started. Listening on %s", port);
    } catch {
      console.log("can't start server");
    }
  })
  .catch(function (err) {
    console.error("invalid database connection");
  });