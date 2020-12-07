const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const competitionSchema = new Schema({
  resultNotes: String,
  eventName: String,
  eventType: String,
  horse: String
});
module.exports = mongoose.model('Competition', competitionSchema);