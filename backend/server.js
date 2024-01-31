const express = require("express");
const dotevn = require("dotenv");
const connectDB = require("./db/connectDB");

dotevn.config();

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
