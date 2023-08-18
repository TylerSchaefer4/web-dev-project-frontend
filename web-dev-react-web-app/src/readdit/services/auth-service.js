import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_API_BASE;
const USERS_URL = `${SERVER_API_URL}/api/users`;
console.log("USERS URL: ", USERS_URL);

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
  console.log("Login service");
  console.log(username, password);
  const response = await api.post(`${USERS_URL}/login`, { username, password });
  console.log("Successful login");
  console.log(response.data);
  const user = response.data;
  return user;
};
export const logout = async () => {
  const response = await api.post(`${USERS_URL}/logout`);
  return response.data;
};
export const profile = async () => {
  const response = await api.post(`${USERS_URL}/profile`);
  return response;
};
export const updateUser = async (user) => {
  const response = await api.put(`${USERS_URL}/${user._id}`, user);
  return response.data;
};
export const register = async (user) => {
  const response = await api.post(`${USERS_URL}/register`, user);
  console.log("Successful register");
  console.log(response.data);
  return response.data;
};
