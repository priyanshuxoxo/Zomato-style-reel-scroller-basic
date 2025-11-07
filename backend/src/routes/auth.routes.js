const express = require("express");
const authController = require("../controllers/auth.controller");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const router = express.Router();

// USER AUTH APIs
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.post("/user/logout", authController.logoutUser);

// ✅ Move /me under /user
router.get("/user/me", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Not authenticated" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Look in both collections
    let user = await userModel.findById(decoded.id).select("-password");
    if (!user)
      user = await foodPartnerModel.findById(decoded.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    console.error("❌ /me error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
});

// FOOD PARTNER AUTH APIs
router.post("/food-partner/register", authController.registerFoodPartner);
router.post("/food-partner/login", authController.loginFoodPartner);
router.post("/food-partner/logout", authController.logoutFoodPartner);

module.exports = router;
