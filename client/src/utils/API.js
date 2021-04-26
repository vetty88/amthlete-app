import axios from "axios";

export default {
  // Gets all competitions
  getCompetitions: function() {
    return axios.get("/api/competitions");
  },
  // Gets the competition with the given id
  getCompetition: function(id) {
    return axios.get('/api/competitions/' + id)
    .then(response => response.data)
       .catch(error => {
        if (error.response) {
          console.log("Competition Error" + error.response);
       }
      });
  },
  // Deletes the competition with the given id
  deleteCompetition: function(id) {
    return axios.delete("/api/competitions/" + id);
  },
  // Saves a competition to the database
  saveCompetition: function(competitionData) {
    return axios.post("/api/competitions", competitionData);
  },
  // Gets all horses
  getHorses: function() {
    return axios.get("/api/horses");
  },
  // Gets the horse with the unique name
  getHorse: function(uniqueName) {
    return axios.get("/api/horses/" + uniqueName);
  },
  // Deletes the horse with the given name
  deleteHorse: function(uniqueName) {
    return axios.delete("/api/horses/" + uniqueName);
  },
  // Saves a horse to the database
  saveHorse: function(horseData) {
    return axios.post("/api/horses", horseData);
  }
};
