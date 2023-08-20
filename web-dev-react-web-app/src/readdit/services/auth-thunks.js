import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
  "user/login",
  async (credentials) => {
    console.log("credentials", credentials);
    console.log("Pre loginthunk attepmt");
    const user = await authService.login(credentials);
    console.log(user);
    return user;
  }
);
export const profileThunk = createAsyncThunk("auth/profile", async () => {
  const response = authService.profile();
  return response.data;
});
export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  return await authService.logout();
});
export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user) => {
    await authService.updateUser(user);
    return user;
  }
);
export const registerThunk = createAsyncThunk(
  "user/register",
  async (credentials) => {
    const user = await authService.register(credentials);
    return user;
  }
);
export const findUsersThunk = createAsyncThunk("users/findUsers", async () => {
  const users = await authService.findUsers();
  return users;
});
export const toggleFollowThunk = createAsyncThunk(
  "user/toggleFollow",
  async ({ currentUserId, userIdToToggle, isCurrentlyFollowing }) => {
    let updatedUser;

    if (isCurrentlyFollowing) {
      updatedUser = await authService.unfollowUser(
        currentUserId,
        userIdToToggle
      );
    } else {
      updatedUser = await authService.followUser(currentUserId, userIdToToggle);
    }

    return updatedUser;
  }
);
export const fetchFollowersThunk = createAsyncThunk(
  "user/fetchFollowers",
  async (userId) => {
    const followers = await authService.fetchFollowers(userId);
    return followers;
  }
);

export const fetchFollowingThunk = createAsyncThunk(
  "user/fetchFollowing",
  async (userId) => {
    const following = await authService.fetchFollowing(userId);
    return following;
  }
);
