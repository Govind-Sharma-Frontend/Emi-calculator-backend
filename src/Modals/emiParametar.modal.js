const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  loanAmount: { type: Number, required: true },
  months: { type: Number, required: true },
  interestRate: { type: Number, required: true},
  netEmiAmount: { type: Number ,required: true},
});

module.exports.Emi = mongoose.model("Emi", Schema);
