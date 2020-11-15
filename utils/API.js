import axios from "axios";

export default {
    // Get competition from google search 
    getGoogleSearchcompetitions: function(query) {
        return axios.get("https://www.googleapis.com/competitions/v1/volumes?q=" + query)
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
  // Saves a competition to the database
  savecompetition: function(savedcompetitions) {
    return axios.post("/api/competitions", savedcompetitions);
  }
};
