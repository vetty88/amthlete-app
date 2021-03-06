import axios from "axios";

export default {
  // Gets all competitions
  getCompetitions: function() {
    return axios.get("/api/competitions");
  },
  // Gets the book with the given id
  getCompetition: function(id) {
    return axios.get("/api/competitions/" + id);
  },
  // Deletes the book with the given id
  deleteCompetition: function(id) {
    return axios.delete("/api/competitions/" + id);
  },
  // Saves a book to the database
  saveCompetition: function(competitionData) {
    return axios.post("/api/competitions", competitionData);
  }
};