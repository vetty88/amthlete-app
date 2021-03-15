const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  eventName: { type: String, required: true },
  horse: { type: String, required: true },
  eventType: String,
  penalties: String,
  resultNotes: String,
  date: { type: Date}
});

const Competition = mongoose.model("Competition", competitionSchema);

module.exports = Competition;