const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Competitions collection and inserts the Competitions below

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost:27017/equestriancompsdb' 
);

const competitionSeed = [
  {
    eventName: "TTT CT Sale",
    eventType: "Combined Training",
    horse: "Tess",
    disciplines: ["Dressage", "Show Jumping"],
    penalties: "35",
    place: "5",
    images: "",
    resultNotes:
      "Dressage penalties 35.17, %64.85, 5th place",
    date: 30/03/2019
  },
  {
    eventName: "TTT HT Greenvale",
    eventType: "Horse Trials",
    horse: "Tess",
    disciplines: ["Dressage", "Show Jumping", "Cross Country"],
    penalties: "46",
    place: "5",
    images: "",
    resultNotes:
      "Dressage penalties 46, %54, SJ penalties: 0, XC Penalties: 0, 5th place",
    date: 05/05/2019
  },
  {
  eventName: "Rosedale Horse Trials (HRCAV)",
  eventType: "Horse Trials",
  horse: "Squirrel",
  disciplines: ["Dressage", "Show Jumping", "Cross Country"],
  penalties: "24",
  place: "6",
  images: "",
  resultNotes:
    "Dressage penalties N/A, %N/A, SJ Penalties: 4, XC Penalties: 20, 6th place",
  date: 20/10/2019
  },
  {
  eventName: "Rosedale Horse Trials (PC)",
  eventType: "Horse Trials",
  horse: "Squirrel",
  disciplines: ["Dressage", "Show Jumping", "Cross Country"],
  penalties: "28",
  place: "2",
  images: "",
  resultNotes:
  "Dressage penalties N/A, %N/A, SJ Penalties: 28, XC Penalties: 0, 2nd place",
  date: 20/10/2019
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
    eventType: "Dressage",
    disciplines: ["Dressage"],
    penalties: "35",
    place: "11",
    images: "",
    resultNotes:
    "Dressage penalties 36, %64, SJ Penalties: N/A, XC Penalties: N/A, Nil place",
    date: 02/02/2020
  },
  {
    eventName: "Nicholson Dressage Jackpot 4.4",
    eventType: "Dressage",
    disciplines: ["Dressage"],
    penalties: "35",
    place: "11",
    images: "",
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
    eventType: "Horse Trials",
    horse: "Squirrel",
    disciplines: ["Dressage", "Show Jumping", "Cross Country"],
    penalties: "39",
    place: "5",
    images: "",
    resultNotes:
    "Dressage penalties N/A, %N/A, SJ Penalties: 28, XC Penalties: 0, 2nd place",
    date: 30/03/2020
    },
    {
      eventName: "AHAA Virtual Show",
      eventType: "Showing",
      horse: "Ardiila",
      disciplines: ["Showing"],
      penalties: "0",
      place: "1",
      images: "",
      resultNotes:
      "Champion partbred (led) Filly",
      date: 01/08/2020
      },
      {
        eventName: "Eagle Point Riding Club Show (HRCAV)",
        eventType: "Showing",
        horse: "Squirrel",
        disciplines: ["Showing"],
        penalties: "0",
        place: "1",
        images: "",
        resultNotes:
        "Champion Mount Most Suitable",
        date: 01/08/2020
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
