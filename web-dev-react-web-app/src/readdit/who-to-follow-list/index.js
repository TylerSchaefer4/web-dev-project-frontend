import React, { useEffect, useState } from "react";
// import whoArray from "./who.json";
import { useDispatch, useSelector } from "react-redux";

import { findUsersThunk } from "../services/auth-thunks";

import WhoToFollowListItem from "./who-to-follow-list-item";
const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findUsersThunk());
  }, [dispatch]);
  return (
    <ul className="list-group mt-2">
      <li className="list-group-item">
        <h3>Who to follow</h3>
      </li>
      {whoArray.map((who) => (
        <WhoToFollowListItem key={who._id} who={who} />
      ))}
    </ul>
  );
};
export default WhoToFollowList;
