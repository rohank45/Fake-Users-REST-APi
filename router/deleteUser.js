const express = require("express");
const router = express.Router();

const User = require("../model/model");

router.delete("/delete/fake/user", async (req, res) => {
  try {
    const user = await User.findOneAndDelete(req.body.name);

    if (!user) {
      return res
        .status(401)
        .json({ message: "User is not available with that name!" });
    }

    res.status(201).json({ message: "Fake User deleted successfully!" });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
