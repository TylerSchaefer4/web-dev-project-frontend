import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [active] = pathname.split("/");
  const links = [
    "home",
    "explore",
    "notifications",
    "messages",
    "bookmarks",
    "lists",
    "profile",
    "more",
  ];
  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          to={`/readdit/${link}`}
          className={`list-group-item text-capitalize ${
            active === link ? "active" : ""
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};
export default NavigationSidebar;
