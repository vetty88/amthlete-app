const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dateString = "2014-01-22T14:56:59.301Z";
$gte : new Date(dateString)


const horseSchema = new Schema({
  uniqueName: { type: String, unique: true, required: true },
  birthYear: { type: String, required: true },
  breed: { type: String, required: true },
  height: { type: String, required: true },
  colour: { type: String, required: true },

});

const Horse = mongoose.model("Horse", horseSchema);

module.exports = Horse;
