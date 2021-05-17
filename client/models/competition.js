const Schema = mongoose.Schema;
import conn from "../server"

let dateString = "2014-01-22T14:56:59.301Z";
$gte : new Date(dateString)


const competitionSchema = new Schema({
  eventName: { type: String, required: true },
  date: Date,
  eventType: { type: String, required: true },
  horse: { type: String, required: true },
  placing: { type: Number, required: true },
  penalties: { type: Number, required: true },
  resultNotes: {type: String},
  author: { type: String },
  testing: { type: String },
});


const Competition = conn.model("Competition", competitionSchema);

module.exports = Competition;
