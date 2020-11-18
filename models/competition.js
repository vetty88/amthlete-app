const mongoose = require("mongoose");
const connection = "mongodb+srv://vetty88:fXP1EMS6Ww0nANsY@cluster0.0cv9z.gcp.mongodb.net/equestrianDB?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  eventName: { type: String, required: true },
  horse: { type: String, required: true },
  resultNotes: String,
  date: { type: Date, default: Date.now }
});

const Competition = mongoose.model("Competition", competitionSchema);

module.exports = Competition;
