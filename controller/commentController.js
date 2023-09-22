const commentModel = require("../model/commentModel");

function createComment(req, res) {
  const comment = new commentModel(req.body);
  comment
    .save()
    .then(() => res.json({ msg: "data added successfully....!" }))
    .catch((error) => res.json({ error: error }));
}
function getComment(req, res) {
  const commentID = req.params.id;
  if (commentID) {
    commentModel
      .findById(commentID)
      .then((data) => res.json(data))
      .catch((error) => res.json({ error: error }));
  } else {
    commentModel
      .find({})
      .then((data) => res.json(data))
      .catch((error) => res.json({ error: error }));
  }
}
module.exports = {
  createComment,
  getComment,
};
