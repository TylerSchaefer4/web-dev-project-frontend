import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import ReadditLogo from "./readdit-logo.png";
import CurrentUser from "./CurrentUser.js";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "./searchSlice";

import "./index.css";

const SearchBar = ({ onSearch }) => {
  // Simulating a logged-in user for now:
  const user = {
    username: "john_doe",
    profilePicture: ReadditLogo,
  };

  const [searchQuery, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searchQuery:", searchQuery);
    console.log("Action:", setSearchQuery(searchQuery));
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <div>
      <div className=" mt-2 search">
        <div className="col-7 d-flex align-items-center">
          <Link
            to="/readdit/home"
            className="readdit-link d-flex align-items-center"
          >
            <img
              src={ReadditLogo}
              alt="Readdit Logo"
              className="readdit-logo"
            />
            <span className="readdit-text">Readdit</span>
          </Link>
          <form
            onSubmit={handleSearch}
            className="search-container position-relative ml-3"
          >
            <input
              placeholder="Search Readdit"
              className="form-control rounded-pill search-input"
              value={searchQuery}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <AiOutlineSearch className="search-icon fs-3 position-absolute" />
          </form>
        </div>
        <CurrentUser user={user} />
      </div>
    </div>
  );
};

export default SearchBar;
