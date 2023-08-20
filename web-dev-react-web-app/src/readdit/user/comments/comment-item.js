import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCommentThunk } from "../../services/post-thunks";

export const getTimeDifferenceInHours = (timestamp) => {
  const currentTime = new Date();
  const postTime = new Date(timestamp);
  const differenceInMilliseconds = currentTime - postTime;
  const differenceInHours = differenceInMilliseconds / (1000 * 3600);

  return Math.round(differenceInHours);
};
const CommentItem = ({ post, comment }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const teslaLogo = "tesla-logo.png";
  const imageUrl = post.image
    ? require(`../posts/images/${post.image}`)
    : require(`../posts/images/${teslaLogo}`);

  const deleteCommentsHandler = (pid, cid) => {
    dispatch(deleteCommentThunk({ postId: pid, commentId: cid }));
  };

  return (
    <div className="wd-tuit">
      <div className="wd-tuit-icon-header-three-dots-container">
        <div className="wd-tuit-icon-header-container">
          <div className="wd-tuit-header">
            <div>
              <img src={imageUrl} className="wd-tuit-icon-img" alt="logo" />
              <span className="wd-tuit-author">
                r/{post.username || currentUser.firstName}{" "}
              </span>
              <span className="wd-tuit-handle">
                {" "}
                Posted by u/{comment.author || currentUser.username}{" "}
              </span>

              <span className="wd-tuit-date">
                {getTimeDifferenceInHours(post.timestamp) || " 1"} hours ago
              </span>
            </div>
            <div className="mt-3">
              <span className="wd-tuit-header-description">
                {comment.content}
              </span>
            </div>
            {/* {post && <PostStats post={post} />} */}
          </div>
        </div>
        <div className="">
          {/* Here we want to add logic so if a user is the same as the post author than they can delete comments otherwise no.*/}
          {comment.author === currentUser.username && (
            <button
              className="bi bi-x-lg float-end"
              onClick={() => deleteCommentsHandler(post._id, comment._id)}
            ></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
