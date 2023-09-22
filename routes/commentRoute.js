"use strict";

const express = require("express");
const { createComment,getComment } = require("../controller/commentController");
const router = express.Router();

// router.patch("/", PostController.updatePost);

module.exports = function () {
  router.post("/", createComment);
  router.get("/:id?", getComment);
  return router;
};