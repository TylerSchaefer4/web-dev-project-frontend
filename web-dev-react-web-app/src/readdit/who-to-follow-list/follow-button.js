import React, { useState } from "react";
import { useDispatch } from "react-redux";

const FollowButton = ({ userIdBeingViewed }) => {
  const [isFollowing, setIsFollowing] = useState(false); // Initially, not following
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleFollowClick = () => {
    if (!currentUser) {
      alert("Please login to follow users.");
      return;
    }

    if (isFollowing) {
      // If already following, unfollow
      dispatch(unfollowUserThunk(userIdBeingViewed));
    } else {
      // If not following, follow
      dispatch(followUserThunk(userIdBeingViewed));
    }
    setIsFollowing(!isFollowing); // Toggle following status
  };

  return (
    <button onClick={handleFollowClick}>
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
