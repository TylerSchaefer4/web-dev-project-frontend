import React from "react";
import { FaRegComment, FaRetweet, FaShareSquare } from "react-icons/fa";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostStats = ({ post }) => {
  // const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const comments = post.comments.length || 0;
  const retuits = post.retuits || 0;
  const shares = post.shares || 0;

  const navigateToCommentsPage = () => {
    // if (!currentUser) {
    //   // user not logged in, show prompt
    //   alert("Please login to before you can look at the comments");
    //   return;
    // }
    navigate(`/readdit/details/${post._id}`);
  };

  return (
    <div className="wd-tuit-stats">
      <div className="wd-tuit-stat">
        <button onClick={navigateToCommentsPage} className="comment-button">
          <FaRegComment /> {comments + " comments"}
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
