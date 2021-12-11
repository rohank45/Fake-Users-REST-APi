const mongoose = require("mongoose");

const RESTschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("fakeUsers", RESTschema);
