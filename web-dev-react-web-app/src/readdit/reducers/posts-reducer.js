import { createSlice } from "@reduxjs/toolkit";
import tuits from "../tuit-summary-list/tuits.json";
import {
  createPostThunk,
  deletePostThunk,
  findPostsThunk,
  updatePostThunk,
  findPostsSearchThunk,
} from "../services/posts-thunks";
const initialState = {
  posts: [],
  loading: false,
};

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "nasa-logo.png",
};

const templatePost = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [findPostsThunk.pending]: (state) => {
      state.loading = true;
      state.posts = [];
    },
    [findPostsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [findPostsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [findPostsSearchThunk.pending]: (state) => {
      state.loading = true;
      state.posts = [];
    },
    [findPostsSearchThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [findPostsSearchThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [deletePostThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = state.posts.filter((t) => t._id !== payload);
    },
    [createPostThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts.push(payload);
    },
    [updatePostThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.posts.findIndex((t) => t._id === payload._id);
      state.posts[tuitNdx] = { ...state.posts[tuitNdx], ...payload };
    },
  },

  reducers: {
    createPost(state, action) {
      state.posts.unshift({
        ...action.payload,
        ...templatePost,
        _id: new Date().getTime(),
      });
    },
    deletePost(state, action) {
      const index = state.posts.findIndex(
        (tuit) => tuit._id === action.payload
      );
      state.posts.splice(index, 1);
    },

    postLikeToggle(state, action) {
      const tuit = state.posts.find((tuit) => tuit._id === action.payload._id);
      tuit.likes = !tuit.liked ? tuit.likes + 1 : tuit.likes - 1;
      tuit.liked = !tuit.liked;
    },
  },
});

export const { createPost, deletePost, postLikeToggle } = postsSlice.actions;
export default postsSlice.reducer;
