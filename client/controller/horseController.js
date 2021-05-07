const db = require("../models");

// Defining methods for the competitionController
module.exports = {
  findAll: function(req, res) {
    db.Horse
      .find(req.query)
      .sort({ id: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUniqueName: function(req, res) {
    db.Horse
      .findByUniqueName(req.params.uniqueName)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Horse
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Horse
      .findOneAndUpdate({ _uniqueName: req.params.uniqueName }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Horse
      .findByUniqueName({ _uniqueName: req.params.uniqueName })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};