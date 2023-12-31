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

async function createLike(req, res) {
  const body = req.body;
  let post = await postModel.findById({ _id: body.postId });
  let _likesCount;
  let _likes = post.likes;

  if (post.likes.includes(body.profileId)) {
    _likesCount = post.likesCount - 1;
    let idIndex = post.likes.indexOf(body.profileId);
    _likes.splice(idIndex, 1);
  } else {
    _likesCount = post.likesCount + 1;
    _likes = [...post.likes, body.profileId];
  }

  postModel
    .findByIdAndUpdate(
      { _id: body.postId },
      {
        likesCount: _likesCount,
        likes: _likes,
      }
    )
    .then((data) => res.json({ msg: "success like" }));
  // postModel
  //   .updateOne(
  //     { _id: body.postId, likes: { $nin: body.profileId } },
  //     {
  //       $set: {
  //         $push: {
  //           likes: body.profileId,
  //         },
  //         $inc: { likesCount: 1 },
  //       },
  //     }
  //   )
  //   .then((data) => res.json({ msg: "success like" }));
}

module.exports = {
  getLike,
  createLike,
};
