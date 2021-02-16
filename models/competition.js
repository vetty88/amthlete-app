const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  horse: { type: String, required: true },
  disciplines: { type: String, required: false },
  penalties: { type: String, required: false },
  place: { type: String, required: false },
  images: { type: String, required: false },
  resultNotes: {type: String},
  // startDate: { type: Date, default: Date.now }
});

const Competition = mongoose.model("Competition", competitionSchema);

module.exports = Competition;
