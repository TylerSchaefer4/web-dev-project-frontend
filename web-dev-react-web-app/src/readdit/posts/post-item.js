import React, { useState } from "react";
import PostStats from "./post-stats";
import blueCheck from "./blueCheck.png";
import "./index.css";
import { useDispatch } from "react-redux";
import { deletePostThunk } from "../services/posts-thunks";
import teslaLogo from "./images/tesla-logo.png";
import { useSelector } from "react-redux";
import {
  AiOutlineUp,
  AiFillCaretUp,
  AiOutlineDown,
  AiFillCaretDown,
} from "react-icons/ai";

import { updatePostThunk } from "../services/posts-thunks";
export const getTimeDifferenceInHours = (timestamp) => {
  const currentTime = new Date();
  const postTime = new Date(timestamp);
  const differenceInMilliseconds = currentTime - postTime;
  const differenceInHours = differenceInMilliseconds / (1000 * 3600);

  return Math.round(differenceInHours);
};

const PostItem = ({
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
  const deletePostHandler = (id) => {
    console.log("deleteTuitHandler", id);
    dispatch(deletePostThunk(id));
  };

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
  const imageUrl = post.image ? require(`./images/${post.image}`) : teslaLogo;
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
              {/* <span className="wd-blue-check">
                <img
                  src={blueCheck}
                  className="wd-blue-check"
                  alt="blue check"
                />
              </span> */}

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
            {post && <PostStats post={post} />}
          </div>
        </div>
        <div className="">
          <button
            className="bi bi-x-lg float-end"
            onClick={() => deletePostHandler(post._id)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
