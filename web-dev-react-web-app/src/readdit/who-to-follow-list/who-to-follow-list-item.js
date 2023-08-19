import React from "react";
import "./who-to-follow-list.css";
function importAll(r) {
  return r.keys().map(r);
}

const WhoToFollowListItem = ({
  who = { username: "NASA", firstName: "NASA", avatarIcon: "nasa-logo.png" },
}) => {
  // const imageUrl = require(`./images/${who.avatarIcon}`);
  const images = importAll(
    require.context("./user-icons", false, /\.(png|jpe?g|svg)$/)
  );
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * images.length);

  // Pick a random image from the images array
  const randomImage = images[randomIndex];

  return (
    <li className="list-group-item">
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
