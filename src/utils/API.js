import axios from "axios";

export default {
  // Gets all Competitions
  getCompetitions: function() {
    return axios.get("/api/competitions");
  },
  // Gets the Competition with the given id
  getCompetition: function(id) {
    return axios.get("/api/competitions/" + id);
  },
  // Deletes the Competition with the given id
  deleteCompetition: function(id) {
    return axios.delete("/api/competitions/" + id);
  },
  // Saves a Competition to the database
  saveCompetition: function(competitionData) {
    return axios.post("/api/competitions", competitionData);
  }
};
