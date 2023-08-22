import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

import {
  faHome,
  faCompass,
  faBell,
  faEnvelope,
  faBookmark,
  faClipboardList,
  faUser,
  faEllipsisH,
  faSignIn,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
const NavigationSidebar = () => {
  const navigate = useNavigate(); // Get the navigate function

  const { pathname } = useLocation();
  const [active] = pathname.split("/");
  const { currentUser } = useSelector((state) => state.user);

  const handleNavigation = (linkName) => {
    if (!currentUser && linkName !== "home") {
      navigate("/readdit/login");
    } else {
      navigate(`/readdit/${linkName}`);
    }
  };

  const links = [
    { name: "home", icon: faHome },
    // { name: "explore", icon: faCompass },
    // { name: "notifications", icon: faBell },
    // { name: "messages", icon: faEnvelope },
    // { name: "bookmarks", icon: faBookmark },
    // { name: "lists", icon: faClipboardList },
    { name: "profile", icon: faUser },
    { name: "more", icon: faEllipsisH },
  ];

  return (
    <div className="list-group mt-2">
      {links.map((link) => (
        <div
          className={`list-group-item text-capitalize pl-2 ${
            active === link.name ? "active" : ""
          }`}
          onClick={() => handleNavigation(link.name)} // Use the handleNavigation function
          style={{ cursor: "pointer" }} // Optional: To show it's clickable
        >
          <FontAwesomeIcon icon={link.icon} style={{ marginRight: "10px" }} />
          <span className="d-none d-xl-inline-block">{link.name}</span>
        </div>
      ))}
    </div>
  );
};
export default NavigationSidebar;
