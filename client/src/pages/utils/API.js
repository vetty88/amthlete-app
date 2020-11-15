import axios from "axios";

export default {
    // Get competition from google search 
    getequestrianDBcompetitions: function(query) {
        return axios.get("mongodb://localhost/equestrianDB?q=" + query)
    },
  // Gets all competitions
  getcompetitions: function() {
    return axios.get("/api/competitions");
  },
  // Gets the competition with the given id
  getcompetition: function(id) {
    return axios.get("/api/competitions/" + id);
  },
  // Deletes the competition with the given id
  deletecompetition: function(id) {
    return axios.delete("/api/competitions/" + id);
  },
  // Completes a competition to the database
  Completecompetition: function(competitionscompetitions) {
    return axios.post("/api/competitions", competitionscompetitions);
  }
};
