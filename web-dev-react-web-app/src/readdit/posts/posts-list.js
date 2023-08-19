import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./post-item";
import { findPostsThunk } from "../services/posts-thunks";

const getTimeDifferenceInHours = (timestamp) => {
  const currentTime = new Date();
  const postTime = new Date(timestamp);
  const differenceInMilliseconds = currentTime - postTime;
  const differenceInHours = differenceInMilliseconds / (1000 * 3600);
  // console.log("differenceInHours", differenceInHours);
  return Math.round(differenceInHours);
};

const PostsList = ({ sortMethod }) => {
  const { posts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    dispatch(findPostsThunk());
  }, [dispatch]);

  useEffect(() => {
    let sortedArray = [...posts];

    switch (sortMethod) {
      case "new":
        sortedArray.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        break;
      case "hot":
        sortedArray.sort(
          (a, b) =>
            b.votes / getTimeDifferenceInHours(b.timestamp) -
            a.votes / getTimeDifferenceInHours(a.timestamp)
        );
        break;
      case "top":
        sortedArray.sort((a, b) => b.votes - a.votes);
        break;
      default:
        break;
    }

    setSortedPosts(sortedArray);
  }, [sortMethod, posts]);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {sortedPosts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;
