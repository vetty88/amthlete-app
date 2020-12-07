var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var competitionSchema = new Schema({
  resultNotes: String,
  eventName: String,
  eventType: String,
  horse: String
});
module.exports = mongoose.model('Competition', competitionSchema);