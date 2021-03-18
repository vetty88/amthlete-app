const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  horse: { type: String, required: true },
  resultNotes: { type: String, required: true },
  date: Date,
});

const Competition = mongoose.model("Competition", competitionSchema);

module.exports = Competition;
