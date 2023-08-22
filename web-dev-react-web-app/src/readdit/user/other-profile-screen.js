import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  fetchFollowersThunk,
  fetchFollowingThunk,
} from "../services/auth-thunks";
import { findPostsThunk } from "../services/posts-thunks";
import OtherPostsList from "./posts/other-posts-list";
import OtherComments from "./comments/other-index";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";
import { Link } from "react-router-dom";

function OtherProfileScreen() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const { userId } = useParams(); // Get userId from route
  const dispatch = useDispatch();
  const whoArray = useSelector((state) => state.who);
  const user = whoArray.find((user) => user._id === userId);

  // Get followers and following from the store
  const followers = useSelector((state) => state.user.followers);
  const following = useSelector((state) => state.user.following);

  useEffect(() => {
    dispatch(findPostsThunk());

    // Fetch the followers and following of the user based on userId
    dispatch(fetchFollowersThunk(userId));
    dispatch(fetchFollowingThunk(userId));
  }, [userId, dispatch]);

  return (
    <div>
      <h1>Profile Screen</h1>
      {currentUser ? (
        <div>
          <h2>{user?.firstName}'s posts</h2>
          <OtherPostsList userId={userId} />
          <h2>{user?.firstName}'s comments</h2>
          <OtherComments userId={userId} />

          <h2>{user?.firstName}'s followers</h2>
          <ul
            className="list-group mt-2"
            style={{ maxWidth: "350px", margin: "0 auto" }}
          >
            {followers &&
              followers.map((follower) => (
                <WhoToFollowListItem key={follower._id} who={follower} />
              ))}
          </ul>

          <h2>People {user?.firstName} is following</h2>
          <ul
            className="list-group mt-2"
            style={{
              maxWidth: "350px",
              margin: "0 auto",
            }}
          >
            {following &&
              following.map((person) => (
                <WhoToFollowListItem key={person._id} who={person} />
              ))}
          </ul>
        </div>
      ) : (
        // If the currentUser is not present, show a Login button
        <div>
          <p>You must be logged in to view profiles.</p>
          <Link to="/readdit/login">
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default OtherProfileScreen;
