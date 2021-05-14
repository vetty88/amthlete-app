const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const horseSchema = new Schema({
  uniqueName: { type: String, unique: true, required: true },
  birthYear: { type: String, required: true },
  breed: { type: String, required: true },
  height: { type: String, required: true },
  colour: { type: String, required: true },
  author: { type: String },
  testing: {type: String},
});

const Horse = mongoose.model("Horse", horseSchema);

module.exports = Horse;
