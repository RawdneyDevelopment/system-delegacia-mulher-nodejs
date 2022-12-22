const mongoose = require("mongoose");

const VictimSchema = new mongoose.Schema({
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
  RG: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  responsibleName: {
    type: String,
  },
  responsibleSecondName: {
    type: String,
  },
  responsibleCPF: {
    type: String,
  },
  responsibleRG: {
    type: String,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Victim = mongoose.model("Victim", VictimSchema);
module.exports = Victim;
