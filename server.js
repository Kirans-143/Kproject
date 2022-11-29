const express = require("express"); //package t get the express object constructor
const app = express(); //this function returns an express object which has the capabilities to handel the serverside codes
const PORT = 3000; //port on our local system
app.listen(PORT, () => {
  //listen funregisters the app for the port
  console.log(`server started on Port ${PORT}`);
});
