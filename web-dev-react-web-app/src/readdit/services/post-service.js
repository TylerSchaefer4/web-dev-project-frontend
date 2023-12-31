import axios from "axios";
const API_BASE = process.env.REACT_APP_SERVER_API_URL;
// const POSTS_API = `${API_BASE}/posts`;

// const TUITS_API = "https://tuiter-node-server-app-nweg.onrender.com/api/tuits";
// const TUITS_API = "http://localhost:4000/api/tuits";
// const POSTS_API = "http://localhost:4000/api/posts";
const POSTS_API = `${process.env.REACT_APP_API_BASE}/api/posts`;

export const findPostById = async (pid) => {
  const response = await axios.get(`${POSTS_API}/${pid}`);
  return response.data;
};

export const createComment = async (postId, comment) => {
  const response = await axios.post(`${POSTS_API}/${postId}/comments`, comment);
  return response.data;
};

export const deleteComment = async (postId, commentId) => {
  const response = await axios.delete(
    `${POSTS_API}/${postId}/comments/${commentId}`
  );
  return response.data;
};
