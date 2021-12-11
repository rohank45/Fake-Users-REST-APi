const express = require("express");
const router = express.Router();

const User = require("../model/model");

router.get("/get/fake/user", async (req, res) => {
  try {
    const checkUser = await User.find(req.body.name);

    if (!checkUser) {
      return res
        .status(401)
        .json({ message: "User is not available with that name!" });
    }

    res.status(201).json({ checkUser });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
