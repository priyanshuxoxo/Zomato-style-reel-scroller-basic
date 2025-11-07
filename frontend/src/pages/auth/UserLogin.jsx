import React from "react";
import "../../styles/auth-shared.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true; // ensures cookies are sent with requests

const UserLogin = ({ setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    try {
      // Step 1️⃣ - Login request
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/user/login`,
        { email, password },
        { withCredentials: true }
      );

      console.log("✅ Login response:", response.data);

      // Step 2️⃣ - Immediately verify using /me route
      const verifyResponse = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/user/me`,
        { withCredentials: true }
      );

      console.log("👤 Verified user:", verifyResponse.data.user);

      // Step 3️⃣ - Update global user state
      if (setUser) setUser(verifyResponse.data.user);

      // Step 4️⃣ - Redirect to home after verification
      navigate("/home");
    } catch (error) {
      console.error("❌ Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div
        className="auth-card"
        role="region"
        aria-labelledby="user-login-title"
      >
        <header>
          <h1 id="user-login-title" className="auth-title">
            Welcome back
          </h1>
          <p className="auth-subtitle">
            Sign in to continue your food journey.
          </p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button className="auth-submit" type="submit">
            Sign In
          </button>
        </form>

        <div className="auth-alt-action">
          New here? <a href="/user/register">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
