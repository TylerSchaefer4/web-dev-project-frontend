import React from "react";
import { Link } from "react-router-dom";
import defaultUserIcon from "./default-user-icon.jpeg";
import "./index.css";
import usericon1 from "./user-icons/icon1.jpeg";
import { useSelector } from "react-redux";
import goldenCheckbox from "./golden-check.png";

function importAll(r) {
  return r.keys().map(r);
}
const CurrentUser = ({ user }) => {
  const { currentUser } = useSelector((state) => state.user);

  const isLoggedIn = user && user.username;
  const images = importAll(
    require.context("./user-icons", false, /\.(png|jpe?g|svg)$/)
  );
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * images.length);

  // Pick a random image from the images array
  const randomImage = images[randomIndex];
  return (
    <Link to={currentUser ? `/readdit/profile` : "/readdit/login"}>
      <div className="current-user">
        <img
          src={currentUser ? usericon1 : defaultUserIcon}
          alt="User Icon"
          className="user-icon"
        />

        <span className="user-name">
          {currentUser ? currentUser.username : "Not Logged In"}
        </span>
        {currentUser && currentUser.type === "PREMIUM" && (
          <img
            src={goldenCheckbox}
            alt="Premium User"
            className="premium-icon"
          />
        )}
      </div>
    </Link>
  );
};

export default CurrentUser;
