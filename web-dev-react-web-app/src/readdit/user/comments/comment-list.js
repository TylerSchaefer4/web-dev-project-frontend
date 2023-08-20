import React, { useEffect } from "react";
import CommentItem from "./comment-item";
import { useSelector } from "react-redux";

const CommentsList = ({ post }) => {
  const { currentUser } = useSelector((state) => state.user);
  const userComments = post.comments.filter(
    (comment) => comment.author === currentUser.username
  );

  return (
    <ul className="list-group">
      {userComments.map((comment) => (
        <CommentItem key={post._id} post={post} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
