const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    req.user = user;

    next();
  } catch (err) {
    res.status({ message: err.message });
  }
};

module.exports = protectRoute;
