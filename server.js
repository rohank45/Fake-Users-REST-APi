require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/database").call();

const home = require("./router/home");
app.use("/", home);

const PostRoute = require("./router/addUsers");
app.use("/", PostRoute);

const editUser = require("./router/editUser");
app.use("/", editUser);

const deleteUser = require("./router/deleteUser");
app.use("/", deleteUser);

const getSepcificUser = require("./router/getSepcificUser");
app.use("/", getSepcificUser);

app.listen(process.env.PORT, () => {
  console.log("Server has started!");
});
