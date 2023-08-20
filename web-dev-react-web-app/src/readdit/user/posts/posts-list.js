import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./post-item";
import { findPostsThunk } from "../../services/posts-thunks";

const PostsList = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { posts, loading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    dispatch(findPostsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      const filteredPosts = posts.filter(
        (post) => post.handle === (currentUser.username || "ASDASD")
      );
      setUserPosts(filteredPosts);
    } else {
      setUserPosts(posts);
    }
  }, [posts, currentUser]);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {userPosts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;
