import axios from "axios";

  const loggedInUser = localStorage.getItem('loggedIn')

export default {
  // Gets all competitions
  getCompetitions: function() {
    return axios.get("/api/competitions");
  },

    // Gets all competitions
  getUsersCompetitions: function() {
    return axios.get("/api/" + loggedInUser + "/competitions" );
  },
  // Gets the competition with the given id
  getCompetition: function(id) {
    return axios.get("/api/competitions/" + id);
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
  getHorse: function(id) {
    return axios.get("/api/horses/" + id);
  },
  // Deletes the horse with the given name
  deleteHorse: function(id) {
    return axios.delete("/api/horses/" + id);
  },
  // Saves a horse to the database
  saveHorse: function(horseData) {
    return axios.post("/api/horses", horseData);
  },
   // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the email
  getUser: function(email) {
    return axios.get("/api/users/" + email);
  },
  // Deletes the user with the email
  deleteUser: function(email) {
    return axios.delete("/api/users/" + email);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
