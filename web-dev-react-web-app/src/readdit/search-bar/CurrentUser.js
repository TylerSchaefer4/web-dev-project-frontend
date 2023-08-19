import React from "react";
import { Link } from "react-router-dom";
import defaultUserIcon from "./default-user-icon.jpeg";
import "./index.css";

function importAll(r) {
  return r.keys().map(r);
}
const CurrentUser = ({ user }) => {
  const isLoggedIn = user && user.username;
  const images = importAll(
    require.context("./user-icons", false, /\.(png|jpe?g|svg)$/)
  );
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * images.length);

  // Pick a random image from the images array
  const randomImage = images[randomIndex];
  return (
    <Link to={isLoggedIn ? `/user/${user.username}` : "/login"}>
      <div className="current-user">
        <img
          src={isLoggedIn ? randomImage : defaultUserIcon}
          alt="User Icon"
          className="user-icon"
        />
        <span className="user-name">
          {isLoggedIn ? user.username : "Not Logged In"}
        </span>
      </div>
    </Link>
  );
};

export default CurrentUser;
