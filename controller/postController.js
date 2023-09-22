const postModel = require("../model/postModel");

function CreatePost(req, res) {
  const post = new postModel(req.body);
  post
    .save()
    .then(() => res.json({ msg: "data added successfully....!" }))
    .catch((error) => res.json({ error: error }));
}

function GetPost(req, res) {
  postModel
    .find({})
    .then((data) => res.json(data))
    .catch((error) => res.json({ error: error }));
}

module.exports = {
  CreatePost,
  GetPost,
};
