import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findPostByIdThunk } from "../services/posts-thunks";
import { useParams } from "react-router";
import CommentItem from "./comment-item";

const CommentsList = ({post}) => {
    const loading = false;
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {post.comments.map((comment) => (
        <CommentItem key={post._id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
