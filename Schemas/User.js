const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password: String,
  mobile: String,
});

let User = mongoose.model('User', UserSchema);
module.exports = User