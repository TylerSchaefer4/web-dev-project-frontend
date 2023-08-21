import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import PostItem from "./post-item";
import { findPostsThunk } from "../../services/posts-thunks";

const OtherPostsList = ({ userId }) => {
  const whoArray = useSelector((state) => state.who);
  // console.log("whoArray", whoArray);
  const user = whoArray.find((user) => user._id === userId);
  // console.log("user", user);
  // const { userId } = useParams(); // Get userId from route
  const { posts, loading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    dispatch(findPostsThunk()); // Pass userId to the thunk
  }, [dispatch, userId]);

  useEffect(() => {
    if (userId) {
      const filteredPosts = posts.filter(
        (post) => post.handle === user.username
      ); // Filter based on userId
      setUserPosts(filteredPosts);
    } else {
      setUserPosts(posts);
    }
  }, [posts, userId]);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {userPosts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default OtherPostsList;
