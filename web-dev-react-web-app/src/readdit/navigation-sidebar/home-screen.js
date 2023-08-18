import React, { useState } from "react";
import PostsList from "../posts/posts-list";
import { FaFire, FaStar, FaClock } from "react-icons/fa";
import "./index.css";
function HomeScreen() {
  const [sortMethod, setSortMethod] = useState("new");

  const sortPosts = (method) => {
    setSortMethod(method);
    // api.getPosts({ sort: method }).then(...)
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <div className="container mt-5 mb-3  border rounded">
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
      </div>
      <div>
        <PostsList sortMethod={sortMethod} />
        hello
      </div>
    </div>
  );
}
export default HomeScreen;
