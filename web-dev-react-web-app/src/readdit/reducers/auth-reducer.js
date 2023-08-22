import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  registerThunk,
  logoutThunk,
  profileThunk,
  updateUserThunk,
  toggleFollowThunk,
  fetchFollowersThunk,
  fetchFollowingThunk,
  findUsersThunk,
} from "../services/auth-thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    followers: [],
    following: [],
    users: [],
  },
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [registerThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [logoutThunk.fulfilled]: (state) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [profileThunk.rejected]: (state, { payload }) => {
      state.currentUser = null;
    },
    [profileThunk.pending]: (state, action) => {
      state.currentUser = null;
    },
    [findUsersThunk.fulfilled]: (state, { payload }) => {
      state.users = payload;
    },

    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [toggleFollowThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [toggleFollowThunk.pending]: (state) => {
      // loading state?
    },
    [toggleFollowThunk.rejected]: (state, { payload }) => {
      // Handle any errors
    },
    [fetchFollowersThunk.fulfilled]: (state, { payload }) => {
      state.followers = payload;
    },
    [fetchFollowersThunk.pending]: (state) => {
      // Handle loading state if necessary
    },
    [fetchFollowersThunk.rejected]: (state, { payload }) => {
      // Handle any errors
    },
    // Handle the new actions for fetching following
    [fetchFollowingThunk.fulfilled]: (state, { payload }) => {
      state.following = payload;
    },
    [fetchFollowingThunk.pending]: (state) => {
      // Handle loading state if necessary
    },
    [fetchFollowingThunk.rejected]: (state, { payload }) => {
      // Handle any errors
    },
  },
});
export default authSlice.reducer;
