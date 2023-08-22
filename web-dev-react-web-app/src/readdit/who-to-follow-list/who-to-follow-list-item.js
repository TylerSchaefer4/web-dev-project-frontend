import React from "react";
import { useNavigate } from "react-router-dom";
import "./who-to-follow-list.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFollowThunk } from "../services/auth-thunks";
import { useState } from "react";
import { useEffect } from "react";

function importAll(r) {
  return r.keys().map(r);
}

const WhoToFollowListItem = ({
  who = {
    id: "12345",
    username: "NASA",
    firstName: "NASA",
    avatarIcon: "nasa-logo.png",
  },
}) => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const isFollowing = currentUser?.following?.includes(who._id);
  const [following, setFollowing] = useState(isFollowing);
  const navigate = useNavigate();

  const handleProfileClick = (profileId) => {
    // if (!currentUser) {
    //   alert("You must sign in first to view user profiles.");
    // } else {
    //   navigate(`/readdit/profile/${profileId}`);
    // }

    navigate(`/readdit/profile/${profileId}`);
  };

  const handleFollowToggle = () => {
    if (!currentUser) {
      alert("You must sign in to follow users.");
      return;
    }

    dispatch(
      toggleFollowThunk({
        currentUserId: currentUser._id,
        userIdToToggle: who._id,
        isCurrentlyFollowing: following, // existing state that keeps track of follow status
      })
    );

    setFollowing(!following);
  };

  const images = importAll(
    require.context("./user-icons", false, /\.(png|jpe?g|svg)$/)
  );
  const randomIndex = who?.iconId ?? Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  useEffect(() => {
    setFollowing(currentUser?.following?.includes(who._id));
  }, [currentUser, who._id]);
  if (currentUser?._id === who._id) {
    return <></>;
  }
  return (
    <li className="list-group-item" onClick={() => handleProfileClick(who._id)}>
      <div className="row">
        <div className="col-2 col-sm-3">
          <img
            className="rounded-circle"
            height={48}
            src={randomImage}
            alt=""
          />
        </div>
        <div className="col-8 col-sm-7">
          <div className="fw-bold truncate">u/{who.username}</div>
          <div className="truncate">@{who.firstName}</div>
        </div>
        <div className="col-2 col-sm-2">
          <button
            className="btn btn-primary rounded-pill float-end"
            onClick={(e) => {
              e.stopPropagation();
              handleFollowToggle();
            }}
          >
            {following ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default WhoToFollowListItem;
