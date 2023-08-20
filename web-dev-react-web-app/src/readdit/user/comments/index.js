import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentsList from "./comment-list";
import { findPostsThunk } from "../../services/posts-thunks";

const Comments = () => {
  const { posts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPostsThunk());
  }, [dispatch]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {posts.map((post) => (
        <div key={post._id}>
          <CommentsList post={post} />
        </div>
      ))}
    </div>
  );
};

export default Comments;
