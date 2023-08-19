import React from "react";
import { FaRegComment, FaRetweet, FaShareSquare } from "react-icons/fa";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostStats = ({ post }) => {
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  const replies = post.replies || 0;
  const retuits = post.retuits || 0;
  const shares = post.shares || 0;

  const navigateToCommentsPage = () => {
    navigate(`/comments/${post._id}`);
  };

  return (
    <div className="wd-tuit-stats">
      <div className="wd-tuit-stat">
        <button onClick={navigateToCommentsPage} className="comment-button">
          <FaRegComment /> {replies + " comments"}
        </button>
      </div>
      <div className="wd-tuit-stat">
        <FaRetweet /> {retuits}
      </div>
      <div className="wd-tuit-stat">
        <FaShareSquare /> {shares}
      </div>
    </div>
  );
};

export default PostStats;
