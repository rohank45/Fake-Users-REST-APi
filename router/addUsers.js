const express = require("express");
const router = express.Router();

const User = require("../model/model");

router.post("/post/fake/user", async (req, res) => {
  const { name, age, gender, country, profession } = req.body;

  try {
    const checkUser = await User.findOne({ name: name });
    if (checkUser) {
      return res.status(401).json({ message: "Provide a unique name!" });
    }

    if (!name || !age || !gender || !country || !profession) {
      return res.status(401).json({ message: "All fields are mandatory!" });
    }

    await User.create({
      name,
      age,
      gender,
      country,
      profession,
    });

    res.status(201).json({ message: "Fake User's data saved successfully!" });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
