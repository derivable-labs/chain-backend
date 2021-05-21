var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var farmRouter = require("./farm");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/farm/", farmRouter);

module.exports = app;