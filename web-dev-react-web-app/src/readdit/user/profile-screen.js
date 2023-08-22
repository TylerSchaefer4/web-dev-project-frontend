import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
  fetchFollowersThunk,
  fetchFollowingThunk,
} from "../services/auth-thunks";
import { findPostsThunk } from "../services/posts-thunks";
import PostList from "./posts/posts-list";
// import CommentsList from "./comments/comment-list";
import Comments from "./comments";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";

function ProfileScreen() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const followers = useSelector((state) => state.user.followers);
  const following = useSelector((state) => state.user.following);

  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = async () => {
    console.log("Profile: ", profile);
    await dispatch(updateUserThunk(profile));
  };
  useEffect(() => {
    dispatch(findPostsThunk());

    if (currentUser) {
      dispatch(fetchFollowersThunk(currentUser._id)); // Fetch followers
      // dispatch(fetchFollowingThunk(currentUser._id)); // Fetch following

      const loadProfile = async () => {
        const { payload } = await dispatch(profileThunk(currentUser._id));
        setProfile(payload);
      };
      if (!profile) {
        loadProfile();
      }
    } else {
      navigate("/readdit/login");
    }

    // console.log("followers: ", followers);
    // console.log("following: ", following);
  }, [dispatch, currentUser, navigate, profile]);
  return (
    <div>
      <h1>Profile Screen</h1>
      {profile && (
        <div>
          <div>
            <label className="mr-2">First Name</label>
            <input
              type="text"
              className="ml-2"
              value={profile.firstName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  firstName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
          <div className="mb-2 mt-2">
            <label className="mr-2">Last Name</label>
            <input
              type="text"
              className="ml-2"
              value={profile.lastName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  lastName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
        </div>
      )}
      <button
        className="mr-2"
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/readdit/login");
        }}
      >
        {" "}
        Logout
      </button>
      <button onClick={save}>Save </button>
      <div>
        <h2>Your posts</h2>
        <PostList />
        <h2>Your comments</h2>
        <Comments />

        <h2>Your followers</h2>
        <ul
          className="list-group mt-2"
          style={{ maxWidth: "350px", margin: "0 auto" }}
        >
          {followers &&
            followers.map((follower) => (
              <WhoToFollowListItem key={follower._id} who={follower} />
            ))}
        </ul>
        <h2>People you're following</h2>
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
    </div>
  );
}
export default ProfileScreen;
