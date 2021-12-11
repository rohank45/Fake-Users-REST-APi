const express = require("express");
const router = express.Router();

const User = require("../model/model");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.status(201).json({ users });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
