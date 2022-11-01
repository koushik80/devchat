const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

// DB connection

mongoose
  .connect(process.env.CONNECT_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("db connected successfully!"))
  .catch((err) => console.log(err));
