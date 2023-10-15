const { request } = require("express");

let mongoose = require("mongoose");

let connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/")
    .then(() => console.log("Connected!"));
};

module.exports = connectDatabase