import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";

const SearchBar = () => {
  return (
    <div>
      <div className="row mt-2">
        <div className="col-7 position-relative">
          <div className="search-container position-relative">
            <input
              placeholder="Search Readdit"
              className="form-control rounded-pill search-input"
            />
            <AiOutlineSearch className="search-icon fs-3 position-absolute" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
