import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  likeCount: {
    default: 0,
    type: Number,
  },
  selectedFile: String,
  createdAt: {
    default: new Date(),
    type: Date,
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
