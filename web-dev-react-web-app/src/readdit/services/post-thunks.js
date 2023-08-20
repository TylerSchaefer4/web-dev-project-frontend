import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./post-service";

export const findPostByIdThunk = createAsyncThunk(
  "post/findPostById",
  async (postId) => {
    const post = await service.findPostById(postId);
    return post;
  }
);

export const createCommentThunk = createAsyncThunk(
  "comments/create",
  async ({ postId, comment }) => {
    const newComment = await service.createComment(postId, comment);
    return newComment;
  }
);

export const deleteCommentThunk = createAsyncThunk(
  "comments/delete",
  async ({ postId, commentId }) => {
    const status = await service.deleteComment(postId, commentId);
    return { postId, commentId, status };
  }
);
