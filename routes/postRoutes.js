"use strict";

const express = require("express");
const { CreatePost, GetPost } = require("../controller/postController");
const router = express.Router();

// router.patch("/", PostController.updatePost);

module.exports = function () {
  router.post("/", CreatePost);
  router.get("/:id?", GetPost);
  return router;
};
