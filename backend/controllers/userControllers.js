const User = require("../models/userModel");
const bcrypt = require("bcrypt");

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
      res.status(201).json({ newUser });
    } else {
      res.status(400).json();
    }
  } catch (err) {
    res.status({ message: err.message });
  }
};

module.exports = {
  signupUser,
};
