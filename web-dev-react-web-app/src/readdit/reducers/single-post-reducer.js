import { createSlice } from "@reduxjs/toolkit";
import {
  findPostByIdThunk,
} from "../services/post-thunks";

const initialState = {
  post: null,
  loading: false,
};

const singlePostSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {
    [findPostByIdThunk.pending]: (state) => {
      state.loading = true;
      state.post = null;
    },
    [findPostByIdThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.post = payload;
    },
    [findPostByIdThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },

  reducers: {
    // TODO: Update comments with likes or deleting or creating ? Not entirely sure if we'll have that yet.
    // createComment(state, action) {
    //   state.post.comments.unshift({
    //     ...action.payload,
    //     ...templatePost,
    //     _id: new Date().getTime(),
    //   });
    // },
    // deleteComment(state, action) {
    //   const index = state.posts.findIndex(
    //     (tuit) => tuit._id === action.payload
    //   );
    //   state.posts.splice(index, 1);
    // },

    // postLikeToggle(state, action) {
    //   const tuit = state.posts.find((tuit) => tuit._id === action.payload._id);
    //   tuit.likes = !tuit.liked ? tuit.likes + 1 : tuit.likes - 1;
    //   tuit.liked = !tuit.liked;
    // },
  },
});

export default singlePostSlice.reducer;
