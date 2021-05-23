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
  penalties: 35,
  placing: 5,
  images: "",
  resultNotes: "Dressage penalties 35.17, %64.85, 5th placing",
  date: new Date("2019-03-30T06:01:17.171Z"),
  author: "Yvette Waller",
  },
  {
  eventName: "TTT HT Greenvale",
  eventType: "Horse Trials",
  horse: "Tess",
  penalties: 46,
  placing: 5,
  images: "",
  resultNotes: "Dressage penalties 46, %54, SJ penalties: 0, XC Penalties: 0, 5th placing",
  date: new Date("2019-05-05T06:01:17.171Z"),
  author: "Yvette Waller",
  },
  {
  eventName: "Rosedale Horse Trials (HRCAV)",
  eventType: "Horse Trials",
  horse: "Squirrel",
  penalties: 24,
  placing: 6,
  images: "",
  resultNotes:
  "Dressage penalties N/A, %N/A, SJ Penalties: 4, XC Penalties: 20, 6th placing",
  date: new Date("2019-10-20T06:01:17.171Z"),
  author: "Yvette Waller",
  },
  {
  eventName: "Rosedale Horse Trials (PC)",
  eventType: "Horse Trials",
  horse: "Squirrel",
  penalties: 28,
  placing: 2,
  images: "",
  resultNotes:
  "Dressage penalties N/A, %N/A, SJ Penalties: 28, XC Penalties: 0, 2nd placing",
  date: new Date("2019-10-13T06:01:17.171Z"),
  author: "Yvette Waller",
  },
  
  {
  eventName: "AHAA Virtual Show",
  eventType: "Showing",
  horse: "Ardilla",
  penalties: 0,
  placing: 1,
  images: "",
  resultNotes:
  "Champion partbred (led) Filly",
  date: new Date("2020-08-01T06:01:17.171Z"),
  author: "Travis Hammond",
  },

];

db.Competition
.remove({})
.then(() => db.Competition.collection.insertMany(competitionSeed))
.then(data => {
console.log(data.result.n + " competition records inserted!");
process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});

const horseSeed = [
  {
  uniqueName: "Squirrel",
  birthYear: "2003",
  breed: "Clydie x Australian Stock Horse",
  height: "15HH",
  colour: "Brown",
  author: "Yvette Waller",
  testing: "testing1",
  },
   {
  uniqueName: "Tess",
  birthYear: "1994",
  breed: "Australian Stock Horse",
  height: "16HH",
  colour: "Bay",
  author: "Yvette Waller",
  testing: "testing2",
  },
   {
  uniqueName: "Ardilla",
  birthYear: "2018",
  breed: "Andalusian x Clydiex",
  height: "15.1HH",
  colour: "Brown",
  author: "Travis Hammond",
  testing: "testing3",
  },

  ];

db.Horse
.remove({})
.then(() => db.Horse.collection.insertMany(horseSeed))
.then(data => {
console.log(data.result.n + " horse records inserted!");
process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});

const userSeed = [
  {
  username: "Travis Hammond",
  email: "travh87@gmail.com",
  password: "pass123",
  date: new Date("2021-05-12T06:01:17.171Z"),
  },
    {
  username: "Yvette Waller",
  email: "vetty88@gmail.com",
  password: "pass123",
  date: new Date("2021-05-12T06:01:17.171Z"),
  },

  ];

db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
console.log(data.result.n + " user records inserted!");
process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});