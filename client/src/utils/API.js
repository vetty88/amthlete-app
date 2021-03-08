import axios from "axios";

export default {
  // Gets all competitions
  getCompetitions: function() {
    return axios.get("/api/competitions");
  },
  // Gets the book with the given _id
  getCompetition: function(_id) {
    return axios.get("/api/competitions/" + _id);
  },
  // Deletes the book with the given _id
  deleteCompetition: function(_id) {
    return axios.delete("/api/competitions/" + _id);
  },
  // Saves a book to the database
  saveCompetition: function(competitionData) {
    return axios.post("/api/competitions", competitionData);
  }
};