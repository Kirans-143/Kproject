const express = require("express"); //package t get the express object constructor
const bodyParser = require("body-parser");
const fs = require("fs");
require("dotenv").config();

const app = express(); //this function returns an express object which has the capabilities to handel the serverside codes

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("views", "./views");
app.set("view engine", "ejs");

const PORT = process.env.PORT; //port on our local system

app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  //listen funregisters the app for the port
  console.log(`server started on Port ${PORT}`);
});
