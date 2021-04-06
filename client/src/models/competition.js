const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dateString = "2014-01-22T14:56:59.301Z";
$gte : new Date(dateString)


const competitionSchema = new Schema({
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  horse: { type: String, required: true },
  placing: { type: String, required: true },
  penalties: { type: String, required: true },
  resultNotes: {type: String},
  date: Date,
});

const Competition = mongoose.model("Competition", competitionSchema);

module.exports = Competition;
