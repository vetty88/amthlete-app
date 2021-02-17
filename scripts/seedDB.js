const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Competitions collection and inserts the competitions below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/equestriancompsdb?authSource=admin"
);

const competitionSeed = [
  {
    eventName: "TTT CT Sale",
    eventType: "combinedTraining",
    horse: "Tess",
    penalties: "35",
    place: "5",
    images: "",
    resultNotes:
      "dressage penalties 35.17, %64.85, 5th place",
    date: '30/03/2019'
  },
  {
    eventName: "TTT HT Greenvale",
    eventType: "horseTrials",
    horse: "Tess",
    penalties: "46",
    place: "5",
    images: "",
    resultNotes:
      "dressage penalties 46, %54, SJ penalties: 0, XC Penalties: 0, 5th place",
    date: '05/05/2019'
  },
  {
  eventName: "Rosedale horseTrials (HRCAV)",
  eventType: "horseTrials",
  horse: "Squirrel",
  penalties: "24",
  place: "6",
  images: "",
  resultNotes:
    "dressage penalties N/A, %N/A, SJ Penalties: 4, XC Penalties: 20, 6th place",
  date: '20/10/2019'
  },
  {
  eventName: "Rosedale horseTrials (PC)",
  eventType: "horseTrials",
  horse: "Squirrel",
  penalties: "28",
  place: "2",
  images: "",
  resultNotes:
  "dressage penalties N/A, %N/A, SJ Penalties: 28, XC Penalties: 0, 2nd place",
  date: '20/10/2019'
  },
  {
    eventName: "Stony Creek Showjumping",
    eventType: "Show Jumping",
    horse: "Squirrel",
    penalties: "100",
    place: "6",
    images: "2",
    resultNotes:
    "Clear Round First with Time Penalties, Fell off Second after Jump-Off. Came 6th OVerall in both sections",
    date: '08/12/2019'
  },
  {
    eventName: "Nicholson dressage Jackpot 4.3",
    eventType: "dressage",
    horse: "Squirrel",
    penalties: "35",
    place: "11",
    images: "",
    resultNotes:
    "dressage penalties 36, %64, SJ Penalties: N/A, XC Penalties: N/A, Nil place",
    date: '02/02/2020'
  },
  {
    eventName: "Nicholson dressage Jackpot 4.4",
    eventType: "dressage",
    horse: "Squirrel",
    penalties: "35",
    place: "11",
    images: "",
    resultNotes:
    "dressage penalties 36, %64, SJ Penalties: N/A, XC Penalties: N/A, Nil place",
    date: '02/02/2020'
  },
  {
    eventName: "Orbost horseTrials (PC)",
    eventType: "horseTrials",
    horse: "Squirrel",
    penalties: "45",
    place: "5",
    images: "",
    resultNotes:
    "dressage penalties 20 (80%) Clear ShowJump, XC 20 penalties - one refusal",
    date: '30/03/2020'
    },
    {
      eventName: "AHAA Virtual Show",
      eventType: "showing",
      horse: "Ardilla",
      penalties: "0",
      place: "1",
      images: "",
      resultNotes:
      "Champion partbred (led) Filly",
      date: '01/08/2020'
      },
      {
        eventName: "Eagle Point Riding Club Show (HRCAV)",
        eventType: "showing",
        horse: "Squirrel",
        penalties: "0",
        place: "1",
        images: "",
        resultNotes:
        "Champion Mount Most Suitable",
        date: '05/11/2020'
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
