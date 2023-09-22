const commentModel = require("../model/commentModel");
const postModel = require("../model/postModel");
const voteModel = require("../model/voteModel");

async function createComment(req, res) {
  const { mbti, enneagram, zodiac, profileId, postId, message } = req.body;
  const updatedComments = new commentModel({ profileId, postId, message });
  let vote = new voteModel({
    profileId,
    postId,
    mbti,
    enneagram,
    zodiac,
  });
  let post = await postModel.findById({ _id: postId });
  postModel
    .findByIdAndUpdate(
      { _id: postId },
      {
        comments: [...post.comments, updatedComments._id],
        votes: [...post.votes, vote._id],
      }
    )
    .then(() => res.json({ msg: "comment added successfully....!" }))
    .catch((error) => res.json({ error: error }));
  // updatedComments
  //   .save()
  //   .then(() => res.json({ msg: "data added successfully....!" }))
  //   .catch((error) => res.json({ error: error }));
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
