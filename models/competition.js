const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  eventName: { type: String, required: true },
  horse: { type: String, required: true },
  resultNotes: String,
  date: { type: Date, default: Date.now }
});

const Competition = mongoose.model("Competition", competitionSchema);

module.exports = Competition;
