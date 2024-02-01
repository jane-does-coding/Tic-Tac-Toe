const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateTokenAndSetCookie = require("../utils/helpers/generateTokenAndSetCookie");

const signupUser = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      username,
    });

    await newUser.save();

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);

      res.status(201).json({ newUser });
    } else {
      res.status(400).json();
    }
  } catch (err) {
    res.status({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ message: "Invalid username" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid password" });

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json(user);
  } catch (err) {
    res.status({ message: err.message });
  }
};

const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    res.status({ message: err.message });
  }
};

const followUnfollowUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);
  } catch (err) {
    res.status({ message: err.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
  logoutUser,
  followUnfollowUser,
};
