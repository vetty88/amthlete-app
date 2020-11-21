import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // Get competition from Equestrian Competitions 
    getSearchCompetitions: function(query) {
      return axios.get("mongodb+srv://vetty88:fXP1EMS6Ww0nANsY@cluster0.0kcvg.mongodb.net/equestrianDB?q=" + query);
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
  saveCompetition: function(savedCompetitions) {
    return axios.post("/api/competitions", savedCompetitions);
  }
};

