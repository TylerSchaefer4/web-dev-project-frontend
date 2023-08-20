import React from "react";
import { useNavigate } from "react-router-dom";
import "./who-to-follow-list.css";
import { useSelector } from "react-redux";

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
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleProfileClick = (profileId) => {
    if (!currentUser) {
      alert("You must sign in first to view user profiles.");
    } else {
      navigate(`/readdit/profile/${profileId}`);
    }
  };

  const images = importAll(
    require.context("./user-icons", false, /\.(png|jpe?g|svg)$/)
  );
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

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
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};

export default WhoToFollowListItem;
