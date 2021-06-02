import React from "react";
import Post from "./Post/Post";
import useStyles from "./PostsStyles";
import { useSelector } from "react-redux";

function Posts() {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <Post></Post>
      <Post></Post>
    </div>
  );
}

export default Posts;
