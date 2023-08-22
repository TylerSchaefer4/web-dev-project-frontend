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

  const num = currentUser?.iconId ?? Math.floor(Math.random() * 10) + 1;
  // const randomIndex = matchedUser.iconId;
  const randomImage = images[num];
  return (
    <Link to={currentUser ? `/readdit/profile` : "/readdit/login"}>
      <div className="current-user">
        <img
          src={currentUser ? randomImage : defaultUserIcon}
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
