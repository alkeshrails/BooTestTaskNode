const postModel = require("../model/postModel");

function getLike(req, res) {
  const id = req.params.id;
  if (id) {
    postModel
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ error: error }));
  } else {
    postModel
      .find({})
      .then((data) => res.json(data))
      .catch((error) => res.json({ error: error }));
  }
}

module.exports = {
    getLike,
    // createLike
  };