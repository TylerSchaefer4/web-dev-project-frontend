import React from "react";
import { FaRegComment, FaRetweet, FaShareSquare } from "react-icons/fa";

const CommentPostStats = ({ post }) => {
  const retuits = post.retuits || 0;
  const shares = post.shares || 0;

  return (
    <div className="wd-tuit-stats">
      {/* <div className="wd-tuit-stat">
        <FaRetweet /> {retuits}
      </div>
      <div className="wd-tuit-stat">
        <FaShareSquare /> {shares}
      </div> */}
    </div>
  );
};

export default CommentPostStats;
