const express = require("express");
const {
  signupUser,
  loginUser,
  logoutUser,
  followUnfollowUser,
} = require("../controllers/userControllers");
const protectRoute = require("../middlewares/protectRoute");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow-unfollow/:userId", protectRoute, followUnfollowUser);

module.exports = router;
