const express = require("express");
const User = require("../Schemas/User");
const jwt = require('jsonwebtoken');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

let jwtSecretKey = "charmin_jwt_secret_key";


const user = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
user.get("/register", async (req, res, next) => {
  res.send("This is the login request");
});
user.post("/register", jsonParser, async (req, res) => {
  let Users = new User();
  // console.log(req.body)
  Users.email = await req.body.email;
  Users.password = await req.body.password;
  Users.mobile = await req.body.mobile;
  Users.name = await req.body.name;

  // console.log(email);
  Users.save();

  let data = {
      time: Date(),
      userId: Users._id,
  }

  const token = jwt.sign(data, jwtSecretKey);

  res.json(token);
});


user.post("/login", jsonParser, async (req, res) => {

  let Users = await User.findById(req.body.id);
  console.log(Users);
  let Response = {};

  
  if (req.body.email === Users.email) {
    Response.email = true;
  } else {
    Response.email = false;
  }

  if (req.body.password === Users.password) {
    Response.password = true;
  } else {
    Response.password = false;
  }

  
  let data = {
    time: Date(),
    userId: Users._id,
}

const token = jwt.sign(data, jwtSecretKey);
// const token = "hell";

 return res.json(token);

// res.send("hell");
});




user.post("/user/edit/:id", jsonParser, async (req, res) => {
 
  let Users =  User.findById(req.params.id);
  // console.log(req.body)
  Users.email = await req.body.email;
  Users.password = await req.body.password;
  Users.mobile = await req.body.mobile;
  Users.name = await req.body.name;

  // console.log(email);
  Users.save();

  let data = {
      time: Date(),
      userId: Users._id,
  }

  const token = jwt.sign(data, jwtSecretKey);

  res.json(token);

})


module.exports = user;
