import React, { useState } from "react";
import PostStats from "./post-stats";
import { FaEllipsisH } from "react-icons/fa";
import blueCheck from "./blueCheck.png";
import "./index.css";
import { useDispatch } from "react-redux";
import { deletePostThunk } from "../services/posts-thunks";
import teslaLogo from "./images/tesla-logo.png";
import { useSelector } from "react-redux";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const PostItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    replies: 100,
    image: teslaLogo,
  },
}) => {
  const dispatch = useDispatch();
  const deletePostHandler = (id) => {
    console.log("deleteTuitHandler", id);
    dispatch(deletePostThunk(id));
  };
  const { currentUser } = useSelector((state) => state.user);
  const imageUrl = post.image ? require(`./images/${post.image}`) : teslaLogo;
  return (
    <div className="wd-tuit">
      <div className="wd-tuit-icon-header-three-dots-container">
        <div className="wd-tuit-icon-header-container">
          <div className="arrow-container">
            <FaArrowUp className="up-arrow" />
            <span className="center-text">hhh</span>
            <FaArrowDown className="down-arrow" />
          </div>

          <div className="wd-tuit-header">
            <div>
              <img src={imageUrl} className="wd-tuit-icon-img" alt="logo" />
              <span className="wd-tuit-author">
                {post.username || currentUser.firstName}{" "}
              </span>
              <span className="wd-blue-check">
                <img
                  src={blueCheck}
                  className="wd-blue-check"
                  alt="blue check"
                />
              </span>

              <span className="wd-tuit-handle">
                {" "}
                {post.handle || "@" + currentUser.username}
              </span>

              <span className="wd-tuit-date"> - {post.time || "1h"}</span>
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
