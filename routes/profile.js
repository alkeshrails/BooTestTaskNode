'use strict';

const express = require('express');
const profileModel = require("../model/profileModel");
const router = express.Router();

module.exports = function () {
  router.get("/*", async function (req, res, next) {
    const profiles = await profileModel
      .find({})
      .then((data) => data)
      .catch((error) => res.json({ error: error }));
    res.render("profile_template", {
      profile: profiles[0],
    });
  });

  return router;
};

