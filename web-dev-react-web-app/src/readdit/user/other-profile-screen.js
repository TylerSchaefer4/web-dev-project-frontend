import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { findPostsThunk } from "../services/posts-thunks";
import OtherPostsList from "./posts/other-posts-list";
import OtherComments from "./comments/other-index";

function OtherProfileScreen() {
  const { userId } = useParams(); // Get userId from route
  const dispatch = useDispatch();
  const whoArray = useSelector((state) => state.who);
  const user = whoArray.find((user) => user._id === userId);

  useEffect(() => {
    dispatch(findPostsThunk());
  }, [userId, dispatch]);
  return (
    <div>
      <div>
        <h2>{user?.firstName}'s posts</h2>
        <OtherPostsList userId={userId} />
        <h2>{user?.firstName}'s comments</h2>
        <OtherComments userId={userId} />
      </div>
    </div>
  );
}
export default OtherProfileScreen;
