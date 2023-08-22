import React, { useState } from "react";
import PostsList from "../posts/posts-list";
import { FaFire, FaStar, FaClock } from "react-icons/fa";
import "./index.css";
import WhatsHappening from "../whats-happening";
import { useSelector } from "react-redux";
function HomeScreen() {
  const [sortMethod, setSortMethod] = useState("new");

  const { currentUser } = useSelector((state) => state.user);

  const sortPosts = (method) => {
    if (!currentUser) {
      // user not logged in, show prompt
      alert("Please login to sort posts");
      return;
    }
    setSortMethod(method);
  };

  return (
    <div>
      <div>
        <div className="container mt-2 mb-3  border rounded">
          <div className="rectangle pt-3 pb-3">
            <button
              className={`custom-btn me-2 ${
                sortMethod === "new" ? "selected" : ""
              }`}
              onClick={() => sortPosts("new")}
            >
              <FaClock /> New
            </button>
            <button
              className={`custom-btn me-2 ${
                sortMethod === "hot" ? "selected" : ""
              }`}
              onClick={() => sortPosts("hot")}
            >
              <FaFire /> Hot
            </button>
            <button
              className={`custom-btn ${sortMethod === "top" ? "selected" : ""}`}
              onClick={() => sortPosts("top")}
            >
              <FaStar /> Top
            </button>
          </div>
        </div>
        <WhatsHappening />
      </div>
      <div>
        <PostsList sortMethod={sortMethod} />
      </div>
    </div>
  );
}
export default HomeScreen;
