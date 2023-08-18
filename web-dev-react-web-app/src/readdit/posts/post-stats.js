import React from "react";
import {
  FaComment,
  FaRetweet,
  FaHeart,
  FaShareSquare,
  FaThumbsDown,
} from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart, AiFillDislike } from "react-icons/ai";
// import { updateTuitThunk } from "../services/tuits-thunks";
import { updatePostThunk } from "../services/posts-thunks";
import { useDispatch } from "react-redux";
import { useState } from "react";

const PostStats = ({ post }) => {
  const dispatch = useDispatch();

  // Default values
  const replies = post.replies || 0;
  const retuits = post.retuits || 0;
  const likes = post.likes || 0;
  const dislikes = post.dislikes || 0;
  const shares = post.shares || 0;

  const [liked, setLiked] = useState(post.liked);
  const [disliked, setDisliked] = useState(post.disliked);
  const [likesCount, setLikesCount] = useState(post.likes || 0);
  const [dislikesCount, setDislikesCount] = useState(post.dislikes || 0);
  const handleLike = () => {
    let newLikes = liked ? likesCount - 1 : likesCount + 1;
    setLiked(!liked);
    setLikesCount(newLikes);
    dispatch(updatePostThunk({ ...post, likes: newLikes, liked: !liked }));
  };

  const handleDislike = () => {
    let newDislikes = disliked ? dislikesCount - 1 : dislikesCount + 1;
    setDisliked(!disliked);
    setDislikesCount(newDislikes);
    dispatch(
      updatePostThunk({ ...post, dislikes: newDislikes, disliked: !disliked })
    );
  };

  const likeIcon = post.liked ? (
    <AiFillHeart color={"red"} />
  ) : (
    <AiOutlineHeart />
  );

  const dislikeIcon = post.disliked ? (
    <AiFillDislike fill="#0D6EFD" />
  ) : (
    <AiFillDislike />
  );

  return (
    <div className="wd-tuit-stats">
      <div className="wd-tuit-stat">
        <FaComment /> {replies}
      </div>
      <div className="wd-tuit-stat">
        <FaRetweet /> {retuits}
      </div>
      <div className="wd-tuit-stat">
        <div onClick={handleLike}>
          {liked ? <AiFillHeart color={"red"} /> : <AiOutlineHeart />}
          <span className="ms-2">{likesCount}</span>
        </div>
      </div>
      <div className="wd-tuit-stat">
        <div onClick={handleDislike}>
          {disliked ? <AiFillDislike fill="#0D6EFD" /> : <AiFillDislike />}
          <span className="ms-2">{dislikesCount}</span>
        </div>
      </div>
      <div className="wd-tuit-stat">
        <FaShareSquare /> {shares}
      </div>
    </div>
  );
};

export default PostStats;
