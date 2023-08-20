import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { findPostsThunk } from "../../services/posts-thunks";
import OtherCommentsList from "./other-comment-list";

const OtherComments = () => {
  const { userId } = useParams(); // Get userId from route
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
          <OtherCommentsList post={post} userId={userId} />
        </div>
      ))}
    </div>
  );
};

export default OtherComments;
