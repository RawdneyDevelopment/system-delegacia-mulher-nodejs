const mongoose = require("mongoose");

const AdressSchema = new mongoose.Schema({
  postal_code: {
    type: String,
  },
  uf: {
    type: String,
  },
  city: {
    type: String,
  },
  district: {
    type: String,
  },
  street: {
    type: String,
  },
  ref_point: {
    type: String,
  },

  number: {
    type: String,
  },
  user_id: {
    types: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Address", Address);
