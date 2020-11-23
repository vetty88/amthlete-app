// import axios from "axios";
// const express  = require('express');
import axios from "axios";

// The getCompetitions method retrieves Competitions from the server
// It accepts a "query" or term to search the Competition api for
export default {
  getCompetitions: function(query) {
    return axios.get("/api/competitions", { params: { q: query } });
  }
};




// let app = express();
// const mongoose = require('mongoose');
// require('dotenv').config(); // configures dotenv
// app.use(express.json());
// // MongoDB connection with ATLAS and Mongoose
// // connects to the value within the .env file
// const uri = process.env.ATLAS_URI;
// // connects mongoose to the uri and sets some mongoose keys to true to combat mongoose's deprecation warnings
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
// const connection = mongoose.connection;
// // make sure that MongoDB connected successfully
// connection.once('open', () => {
// console.log("MongoDB database connected!!");
// });


// export default {
//     // Get competition from Equestrian Competitions 
//     getSearchCompetitions: function(query) {
//         return axios.get(connection + query);
//     },
//   // Gets all competitions
//   getCompetitions: function() {
//     return axios.get("/api/competitions");
//   },
//   // Gets the competition with the given id
//   getCompetition: function(id) {
//     return axios.get("/api/competitions/" + id);
//   },
//   // Deletes the competition with the given id
//   deleteCompetition: function(id) {
//     return axios.delete("/api/competitions/" + id);
//   },
//   // Completes a competition to the database
//   saveCompetition: function(savedCompetitions) {
//     return axios.post("/api/competitions", savedCompetitions);
//   }
// };
