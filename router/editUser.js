const express = require("express");
const router = express.Router();

const User = require("../model/model");

router.put("/edit/fake/user", async (req, res) => {
  const { name, age, gender, country, profession } = req.body;

  try {
    await User.findOneAndUpdate(req.body.name, {
      name,
      age,
      gender,
      country,
      profession,
    });

    res.status(201).json({ message: "Fake User's data updated successfully!" });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
