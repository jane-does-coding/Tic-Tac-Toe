const express = require("express");
const {
  signupUser,
  loginUser,
  logoutUser,
  followUnfollowUser,
  updateUser,
  getUser,
} = require("../controllers/userControllers");
const protectRoute = require("../middlewares/protectRoute");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow-unfollow/:userId", protectRoute, followUnfollowUser);
router.post("/update/:userId", protectRoute, updateUser);
router.get("/profile/:username", getUser);

module.exports = router;
