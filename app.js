const express = require("express");
const app = express();

//Config middleware
app.set("json spaces", 2); // Set json pretty printing

//Import routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

/*
    Export App to Serverless
*/
module.exports = app;
