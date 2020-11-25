const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Competitions collection and inserts the Competitions below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/equestriancompsdb"
);

const competitionSeed = [
  {
    eventName: "TTT CT Sale",
    horse: "Tess",
    resultNotes:
      "Dressage penalties 35.17, %64.85, 5th place",
    date: 30/03/2019
  },
  {
    eventName: "TTT HT Greenvale",
    horse: "Tess",
    resultNotes:
      "Dressage penalties 46, %54, SJ penalties: 0, XC Penalties: 0, 5th place",
    date: 05/05/2019
  },
  {
    eventName: "Rosedale Horse Trials (HRCAV)",
    horse: "Squirrel",
    resultNotes:
      "Dressage penalties N/A, %N/A, SJ Penalties: 4, XC Penalties: 20, 6th place",
    date: 20/10/2019
  },
  {
    eventName: "Rosedale Horse Trials (PC)",
    horse: "Squirrel",
    resultNotes:
    "Dressage penalties N/A, %N/A, SJ Penalties: 28, XC Penalties: 0, 2nd place",
    date: 27/10/2019
  },
  {
    eventName: "Stony Creek Showjumping",
    horse: "Squirrel",
    resultNotes:
    "Dressage penalties N/A, %N/A, SJ Penalties: N/A, XC Penalties: N/A, 6th place",
    date: 08/12/2019
  },
  {
    eventName: "Nicholson Dressage Jackpot 4.3",
    horse: "Squirrel",
    resultNotes:
    "Dressage penalties 36, %64, SJ Penalties: N/A, XC Penalties: N/A, Nil place",
    date: 02/02/2020
  },
  {
    eventName: "Nicholson Dressage Jackpot 4.4",
    horse: "Squirrel",
    resultNotes:
    "Dressage penalties 35, %65, SJ Penalties: N/A, XC Penalties: N/A, Nil place",
    date: 02/02/2020
  },
  {
    eventName: "Orbost Horse Trials (PC)",
    horse: "Squirrel",
    resultNotes:
    "Dressage penalties 19, %81, SJ Penalties: 0, XC Penalties: 20, 5th place",
    date: 30/03/2019
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
