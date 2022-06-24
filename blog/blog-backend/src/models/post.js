import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchma = new Schema({
  title : String,
  body : String,
  tags: [String],
  publishedDate: {
    type : Date,
    default : Date.now
  }
});

const Post = mongoose.model('Post', PostSchma);
export default Post;