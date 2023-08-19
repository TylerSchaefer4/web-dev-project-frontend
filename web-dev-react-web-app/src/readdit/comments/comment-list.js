import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findPostByIdThunk } from "../services/posts-thunks";
import { useParams } from "react-router";
import CommentItem from "./comment-item";

const CommentsList = ({post}) => {
  return (
    <ul className="list-group">
      {post.comments.map((comment) => (
        <CommentItem key={post._id} post={post} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
