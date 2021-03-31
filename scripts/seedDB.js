const mongoose = require("mongoose");
const db = require("../models");
let dateString = "2014-01-22T14:56:59.301Z";
$gte : new Date(dateString)

// This file empties the Competitions collection and inserts the competitions below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/equestriancompsdb"
);

const competitionSeed = [
  {
  eventName: "TTT CT Sale",
  eventType: "Combined Training",
  horse: "Tess",
  penalties: "35",
  placing: "5",
  images: "",
  resultNotes: "Dressage penalties 35.17, %64.85, 5th placing",
  date: new Date("2019-03-30T06:01:17.171Z")
  },
  {
  eventName: "TTT HT Greenvale",
  eventType: "Horse Trials",
  horse: "Tess",
  penalties: "46",
  placing: "5",
  images: "",
  resultNotes: "Dressage penalties 46, %54, SJ penalties: 0, XC Penalties: 0, 5th placing",
  date: new Date("2019-05-05T06:01:17.171Z")
  },
  {
  eventName: "Rosedale Horse Trials (HRCAV)",
  eventType: "Horse Trials",
  horse: "Squirrel",
  penalties: "24",
  placing: "6",
  images: "",
  resultNotes:
  "Dressage penalties N/A, %N/A, SJ Penalties: 4, XC Penalties: 20, 6th placing",
  date: new Date("2019-10-20T06:01:17.171Z")
  },
  {
  eventName: "Rosedale Horse Trials (PC)",
  eventType: "Horse Trials",
  horse: "Squirrel",
  penalties: "28",
  placing: "2",
  images: "",
  resultNotes:
  "Dressage penalties N/A, %N/A, SJ Penalties: 28, XC Penalties: 0, 2nd placing",
  date: new Date("2019-10-13T06:01:17.171Z")
  },
  {
  eventName: "Stony Creek Show Jumping",
  eventType: "Show Jumping",
  horse: "Squirrel",
  penalties: "100",
  placing: "6",
  resultNotes:
  "Dressage penalties N/A, %N/A, SJ Penalties: N/A, XC Penalties: N/A, 6th placing",
  date: new Date("2019-12-08T06:01:17.171Z")
  },
  {
  eventName: "Nicholson Dressage Jackpot 4.3",
  eventType: "Dressage",
  horse: "Squirrel",
  penalties: "35",
  placing: "NIL",
  images: "",
  resultNotes:
  "Dressage penalties 36, %64, SJ Penalties: N/A, XC Penalties: N/A, Nil placing",
  date: new Date("2020-02-02T06:01:17.171Z")
  },
  {
  eventName: "Nicholson Dressage Jackpot 4.4",
  eventType: "Dressage",
  horse: "Squirrel",
  penalties: "35",
  placing: "NIL",
  images: "",
  resultNotes:
  "Dressage penalties 36, %64, SJ Penalties: N/A, XC Penalties: N/A, Nil placing",
  date: new Date("2020-02-02T06:01:17.171Z")
  },
  {
  eventName: "Orbost Horse Trials (PC)",
  eventType: "Horse Trials",
  horse: "Squirrel",
  penalties: "39",
  placing: "5",
  images: "",
  resultNotes:
  "Dressage penalties N/A, %N/A, SJ Penalties: 28, XC Penalties: 0, 2nd placing",
  date: new Date("2020-03-10T06:01:17.171Z")
  },
  {
  eventName: "AHAA Virtual Show",
  eventType: "Showing",
  horse: "Ardilla",
  penalties: "0",
  placing: "1",
  images: "",
  resultNotes:
  "Champion partbred (led) Filly",
  date: new Date("2020-08-01T06:01:17.171Z")
  },
  {
  eventName: "Eagle Point Riding Club Show (HRCAV)",
  eventType: "Showing",
  horse: "Squirrel",
  penalties: "0",
  placing: "1",
  images: "",
  resultNotes:
  "Champion Mount Most Suitable",
  date: new Date("2020-11-05T06:01:17.171Z")
  },

];

db.Competition
.remove({})
.then(() => db.Competition.collection.insertMany(competitionSeed))
.then(data => {
console.log(data.result.n + " records inserted!");
process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});