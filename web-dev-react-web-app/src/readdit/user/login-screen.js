import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      console.log("username: ", username);
      console.log("Starting to log in");
      const result = await dispatch(loginThunk({ username, password }));

      if (result) {
        // check if result is truthy (not null, undefined, etc.)
        navigate("/readdit/profile");
        console.log("logged in");
      } else {
        console.error("Login failed. No user returned.");
        alert("Login failed. Please check your credentials.");
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <div className="mt-2">
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="mt-2">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button
        style={{ marginRight: "10px" }}
        className="btn btn-primary mt-2"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={() => navigate("/readdit/register")}
      >
        Register
      </button>
    </div>
  );
}
export default LoginScreen;
