const postModel = require("../model/postModel");

function CreatePost(req, res) {
  const post = new postModel(req.body);
  post
    .save()
    .then(() => res.json({ msg: "data added successfully....!" }))
    .catch((error) => res.json({ error: error }));
}

function GetPost(req, res) {
  const postID = req.params.id;
  const sort = req.query.sort;
  if (postID) {
    postModel
      .findById(postID)
      .then((data) => res.json(data))
      .catch((error) => res.json({ error: error }));
  } else {
    const sortQuery = sort === "Best" ? { likesCount: -1 } : { _id: 1 };
    postModel
      .find({})
      .sort(sortQuery)
      .then((data) => res.json(data))
      .catch((error) => res.json({ error: error }));
  }
}

module.exports = {
  CreatePost,
  GetPost,
};
