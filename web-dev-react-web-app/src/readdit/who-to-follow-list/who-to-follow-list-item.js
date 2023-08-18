import React from "react";
import "./who-to-follow-list.css";
const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa-logo.png" },
}) => {
  const imageUrl = require(`./images/${who.avatarIcon}`);

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-4 col-sm-3">
          <img className="rounded-circle" height={48} src={imageUrl} alt="" />
        </div>
        <div className="col-8 col-sm-7">
          <div className="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-12 col-sm-2">
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
