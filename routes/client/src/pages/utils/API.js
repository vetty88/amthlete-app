import axios from "axios";

export default {
    // Get competition from google Competitions 
    getEquestrianDBCompetitions: function(query) {
        return axios.get("mongodb://localhost/equestrianDB?q=" + query)
    },
  // Gets all competitions
  getCompetitions: function() {
    return axios.get("/api/competitions");
  },
  // Gets the competition with the given id
  getCompetition: function(id) {
    return axios.get("/api/competitions/" + id);
  },
  // Deletes the competition with the given id
  deleteCompetition: function(id) {
    return axios.delete("/api/competitions/" + id);
  },
  // Completes a competition to the database
  CompleteCompetition: function(CompetitionsCompetitions) {
    return axios.post("/api/competitions", CompetitionsCompetitions);
  }
};
