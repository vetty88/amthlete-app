const Schema = mongoose.Schema;
import conn from "../server"


// Create Schema
const horseSchema = new Schema({
  uniqueName: { type: String, unique: true, required: true },
  birthYear: { type: String, required: true },
  breed: { type: String, required: true },
  height: { type: String, required: true },
  colour: { type: String, required: true },
  author: { type: String, required: true },
  testing: { type: String },
});

const Horse = conn.model("Horse", horseSchema);

module.exports = Horse;
