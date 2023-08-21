import React, { useState, useEffect } from 'react';
import CommentPostStats from "./comment-post-stats";
import "../posts/index.css";
import { useDispatch } from "react-redux";
import { deletePostThunk } from "../services/posts-thunks";
import { useSelector } from "react-redux";
import {
  AiOutlineUp,
  AiFillCaretUp,
  AiOutlineDown,
  AiFillCaretDown,
} from "react-icons/ai";
import { updatePostThunk } from "../services/posts-thunks";

const getTimeDifferenceInHours = (timestamp) => {
  const currentTime = new Date();
  const postTime = new Date(timestamp);
  const differenceInMilliseconds = currentTime - postTime;
  const differenceInHours = differenceInMilliseconds / (1000 * 3600);

  return Math.round(differenceInHours);
};

const teslaLogo = "tesla-logo.png";

const CommentPostItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    replies: 100,
    image: teslaLogo,
    votes: 0,
    timestamp: "2023-08-17T23:32:36.294+00:00",
  },
}) => {
  const dispatch = useDispatch();

  const [userVote, setUserVote] = useState(0); // 1 for like, -1 for dislike, 0 for neutral
  const [voteCount, setVoteCount] = useState(post.votes || 0);

  const handleLike = () => {
    let newVoteCount = voteCount;

    if (userVote === 1) {
      // User is unliking the post (they previously liked it)
      newVoteCount -= 1;
      setUserVote(0);
    } else if (userVote === -1) {
      // User is changing their vote from dislike to like
      newVoteCount += 2;
      setUserVote(1);
    } else {
      // User is liking the post for the first time
      newVoteCount += 1;
      setUserVote(1);
    }

    setVoteCount(newVoteCount);

    // Update the voteCount on the server
    dispatch(updatePostThunk({ ...post, votes: newVoteCount }));
  };

  const handleDislike = () => {
    let newVoteCount = voteCount;

    if (userVote === -1) {
      // User is un-disliking the post (they previously disliked it)
      newVoteCount += 1;
      setUserVote(0);
    } else if (userVote === 1) {
      // User is changing their vote from like to dislike
      newVoteCount -= 2;
      setUserVote(-1);
    } else {
      // User is disliking the post for the first time
      newVoteCount -= 1;
      setUserVote(-1);
    }

    setVoteCount(newVoteCount);

    // Update the voteCount on the server
    dispatch(updatePostThunk({ ...post, votes: newVoteCount }));
  };

  const { currentUser } = useSelector((state) => state.user);
  const imageUrl = post.image
    ? require(`../posts/images/${post.image}`)
    : require(`../posts/images/${teslaLogo}`);
  return (
    <div className="wd-tuit">
      <div className="wd-tuit-icon-header-three-dots-container">
        <div className="wd-tuit-icon-header-container">
          <div className="arrow-container">
            <div onClick={handleLike}>
              {userVote === 1 ? (
                <AiFillCaretUp color={"green"} />
              ) : (
                <AiOutlineUp />
              )}
            </div>
            <span className="center-text">{voteCount}</span>
            <div onClick={handleDislike}>
              {userVote === -1 ? (
                <AiFillCaretDown color={"red"} />
              ) : (
                <AiOutlineDown />
              )}
            </div>
          </div>

          <div className="wd-tuit-header">
            <div>
              <img src={imageUrl} className="wd-tuit-icon-img" alt="logo" />
              <span className="wd-tuit-author">
                r/{post.username || "UserUnknown"}{" "}
              </span>
              <span className="wd-tuit-handle">
                {" "}
                Posted by u/{post.handle || "uu123"}{" "}
              </span>

              <span className="wd-tuit-date">
                {getTimeDifferenceInHours(post.timestamp) || " 1"} hours ago
              </span>
            </div>
            <div>
              <span className="wd-tuit-header-description">{post.post}</span>
            </div>
            {post && <CommentPostStats post={post} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPostItem;
