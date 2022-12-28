const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  adicionaldName: {
    type: String,
    require: true,
  },
  CPF: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
