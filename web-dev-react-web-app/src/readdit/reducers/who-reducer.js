import { createSlice } from "@reduxjs/toolkit";
// import whoArray from "../who-to-follow-list/who.json";
import { findUsersThunk } from "../services/auth-thunks";

const initialState = [];
const whoSlice = createSlice({
  name: "who",
  initialState,
  extraReducers: {
    [findUsersThunk.fulfilled]: (state, { payload }) => {
      return payload;
    },
  },
});

export default whoSlice.reducer;
