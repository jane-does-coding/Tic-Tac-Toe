const express = require("express");
const { signupUser } = require("../controllers/userControllers");

const router = express.Router();

router.post("/signup", signupUser);

module.exports = router;
