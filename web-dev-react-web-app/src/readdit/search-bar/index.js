import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import ReadditLogo from "./readdit-logo.png";
import CurrentUser from "./CurrentUser.js";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "./searchSlice";
import { useNavigate } from "react-router-dom";
import { findPostsSearchThunk } from "../services/posts-thunks";
import { useLocation } from "react-router-dom";

import "./index.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialSearchValue = queryParams.get("criteria") || "";
  // console.log("InitSearch", initialSearchValue);

  // Simulating a logged-in user for now:
  const user = {
    username: "john_doe",
    profilePicture: ReadditLogo,
  };

  const [searchQuery, setSearchInput] = useState(initialSearchValue);
  const dispatch = useDispatch();

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     console.log("searchQuery:", searchQuery);
  //     console.log("Action:", setSearchQuery(searchQuery));
  //     dispatch(setSearchQuery(searchQuery));
  //   };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://counterapi.com/c.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSearch = (e) => {
    if (e) {
      e.preventDefault();
    }
    dispatch(findPostsSearchThunk(searchQuery));
    console.log("searchQuery:", searchQuery);
    if (searchQuery === "") {
      navigate(`/readdit/search`);
    } else {
      navigate(`/readdit/search?criteria=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    if (initialSearchValue) {
      handleSearch();
    }
  }, [dispatch, initialSearchValue]);

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
