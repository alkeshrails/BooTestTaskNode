"use strict";

const express = require("express");
const { connect } = require("./connection/connection");
const app = express();
const port = process.env.PORT || 3001;

// set the view engine to ejs
app.set("view engine", "ejs");

// routes
app.use("/", require("./routes/profile")());

connect()
  .then(function () {
    try {
      // start server
      const server = app.listen(port);
      console.log("Express started. Listening on %s", port);
    } catch {
      console.log("can't start server");
    }
  })
  .catch(function (err) {
    console.error("invalid database connection");
  });
