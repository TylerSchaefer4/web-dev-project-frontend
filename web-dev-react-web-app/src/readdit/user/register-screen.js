import React, { useState } from "react";
import { useNavigate } from "react-router";
import { loginThunk, registerThunk } from "../services/auth-thunks";
import { useDispatch } from "react-redux";

function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isPremium, setIsPremium] = useState(false); // 1. Add new state

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const userType = isPremium ? "PREMIUM" : "REGULAR";
      await dispatch(
        registerThunk({
          username,
          password,
          firstName,
          lastName,
          type: userType,
        })
      );
      navigate("/readdit/profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1> Register </h1>
      <label className="form-label">Username</label>
      <input
        placeholder="username"
        className="form-control"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="form-label">Password</label>
      <input
        placeholder="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="form-label">First Name</label>
      <input
        placeholder="first name"
        className="form-control"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label className="form-label">Last Name</label>
      <input
        placeholder="last name"
        className="form-control"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="premiumCheck"
          checked={isPremium}
          onChange={(e) => setIsPremium(e.target.checked)} // 2. Add checkbox that toggles isPremium
        />
        <label className="form-check-label" htmlFor="premiumCheck">
          Register as a PREMIUM user
        </label>
      </div>
      <button className="btn btn-primary" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}
export default RegisterScreen;
