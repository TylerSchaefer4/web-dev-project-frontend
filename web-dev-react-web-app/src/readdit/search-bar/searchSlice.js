import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// Export the action creator
export const { setSearchQuery } = searchSlice.actions;

// Export the reducer
export default searchSlice.reducer;
