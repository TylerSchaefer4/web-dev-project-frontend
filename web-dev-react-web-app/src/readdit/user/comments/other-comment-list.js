import React, { useEffect } from "react";
import CommentItem from "./comment-item";
import { findUsersThunk } from "../../services/auth-thunks";
import { findUsers } from "../../services/auth-service";
import { useDispatch, useSelector } from "react-redux";

const OtherCommentsList = ({ post, userId }) => {
  const whoArray = useSelector((state) => state.who);
  const dispatch = useDispatch();
  // console.log("whoArray", whoArray);
  const user = whoArray.find((user) => user._id === userId);
  // console.log("user", user);
  const userComments = post.comments.filter(
    (comment) => comment.author === user.username
  );
  // console.log("userComments", userComments);
  // console.log("username", user.username);
  return (
    <ul className="list-group">
      {userComments.map((comment) => (
        <CommentItem key={post._id} post={post} comment={comment} />
      ))}
    </ul>
  );
};

export default OtherCommentsList;
