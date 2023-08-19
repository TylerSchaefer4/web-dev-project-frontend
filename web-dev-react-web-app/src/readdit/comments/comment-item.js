import { AiFillCaretDown, AiFillCaretUp, AiOutlineUp } from "react-icons/ai";
import { getTimeDifferenceInHours } from "../posts/post-item";
import { useSelector } from "react-redux";

const CommentItem = ({ post, comment }) => {
  const { currentUser } = useSelector((state) => state.user);
  const teslaLogo = 'tesla-logo.png';
  const imageUrl = post.image
    ? require(`../posts/images/${post.image}`)
    : require(`../posts/images/${teslaLogo}`);

    const deleteCommentsHandler = () => {
        console.log("Attempted to delete")
    }

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
          <button
            className="bi bi-x-lg float-end"
            onClick={() => deleteCommentsHandler(post._id)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
