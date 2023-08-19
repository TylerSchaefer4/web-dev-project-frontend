import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./posts-service";

export const findPostsThunk = createAsyncThunk(
  "posts/findPosts",
  async () => await service.findPosts()
);
<<<<<<< HEAD

export const findPostsSearchThunk = createAsyncThunk(
  "posts/findPostsSearch",
  async (searchQuery) => await service.findPostsSearch(searchQuery)
=======
export const findPostByIdThunk = createAsyncThunk(
  "posts/findPostById",
  async (postId) => {
    const post = await service.findPostById(postId);
    return post;
  }
>>>>>>> 8f6167c (comment page Changes (need fixing))
);
export const deletePostThunk = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    await service.deletePost(postId);
    return postId;
  }
);
export const createPostThunk = createAsyncThunk(
  "posts/createPost",
  async (post) => {
    const newPost = await service.createPost(post);
    return newPost;
  }
);
export const updatePostThunk = createAsyncThunk(
  "posts/updatePost",
  async (post) => await service.updatePost(post)
);
