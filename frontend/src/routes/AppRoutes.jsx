import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import UserRegister from "../pages/auth/UserRegister";
import ChooseRegister from "../pages/auth/ChooseRegister";
import UserLogin from "../pages/auth/UserLogin";
import FoodPartnerRegister from "../pages/auth/FoodPartnerRegister";
import FoodPartnerLogin from "../pages/auth/FoodPartnerLogin";
import Home from "../pages/general/Home";
import Saved from "../pages/general/Saved";
import BottomNav from "../components/BottomNav";
import CreateFood from "../pages/food-partner/CreateFood";
import Profile from "../pages/food-partner/Profile";
import FrontPage from "../pages/FrontPage";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppRoutes = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Check authentication on load
  useEffect(() => {
    axios
      .get("/api/auth/user/me")
      .then((res) => {
        // console.log("✅ User verified:", res.data.user);
        setUser(res.data.user);
      })
      .catch((err) => {
        // console.log("❌ Not logged in:", err);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Checking authentication...</p>;

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<FrontPage />} />
        <Route path="/register" element={<ChooseRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin setUser={setUser} />} />
        <Route
          path="/food-partner/register"
          element={<FoodPartnerRegister />}
        />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            user ? (
              <>
                <Home />
                <BottomNav />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/saved"
          element={
            user ? (
              <>
                <Saved />
                <BottomNav />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/create-food"
          element={user ? <CreateFood /> : <Navigate to="/" replace />}
        />

        <Route
          path="/food-partner/:id"
          element={user ? <Profile /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
