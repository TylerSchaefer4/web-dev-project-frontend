import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./post-service";

export const findPostByIdThunk = createAsyncThunk(
  "post/findPostById",
  async (postId) => {
    const post = await service.findPostById(postId);
    return post;
  }
);