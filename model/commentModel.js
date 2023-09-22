const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Types.ObjectId,
  },
  postId: {
    type: mongoose.Types.ObjectId,
    
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.models.comments || mongoose.model("comment", CommentSchema);
