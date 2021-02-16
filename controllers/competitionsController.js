const db = require("../models");

// Defining methods for the CompetitionController
module.exports = {
  findAll: function(req, res) {
    db.Competition.find(req.query)
      .then(dbCompetition => res.json(dbCompetition))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Competition.findById(req.params.id)
      .then(dbCompetition => res.json(dbCompetition))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Competition.create(req.body)
      .then(dbCompetition => res.json(dbCompetition))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Competition.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbCompetition => res.json(dbCompetition))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Competition.findById(req.params.id)
      .then(dbCompetition => dbCompetition.remove())
      .then(dbCompetition => res.json(dbCompetition))
      .catch(err => res.status(422).json(err));
  }
};