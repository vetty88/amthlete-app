var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Competition = require('../../models/Competition');

router.get('/', function(req, res){
res.render('index');
});

router.route('/insert')
.post(function(req,res) {
  var competition = new Competition();
    competition.eventName = req.body.eventName;
    competition.horse = req.body.horse;
    competition.eventType = req.body.eventType;
    competition.penalties = req.body.penalties;
    competition.save(function(err) {
  if (err)
  res.send(err);
  res.send('Competition successfully added!');
  });
});

router.route('/update')
.post(function(req, res) {
  var doc = {
    eventName: req.body.eventName,
    horse: req.body.horse,
    eventType: req.body.eventType,
    penalties: req.body.penalties
};
console.log(doc);

  Competition.update({_id: req.body._id}, doc, function(err, result) {

  if (err)
  res.send(err);
  res.send('Competition successfully updated!');
  });
});

router.get('/delete', function(req, res){
  var id = req.query.id;
  Competition.find({_id: id}).remove().exec(function(err, competition) {
  if(err)
  res.send(err);
  res.send('Competition successfully deleted!');
  });
});

router.get('/getAll',function(req, res) {
  var eventTypeRec = req.query.eventType;
  var penaltiesRec = req.query.penalties;
    if(eventTypeRec && eventTypeRec != 'All'){
    Competition.find({$and: [ {eventType: eventTypeRec}, {penalties: penaltiesRec}]}, function(err, competitions) {
    if (err)
    res.send(err);
    res.json(competitions);
    });
    } else {
      Competition.find({penalties: penaltiesRec}, function(err, competitions) {
      if (err)
      res.send(err);
      res.json(competitions);
      });
  }
});

module.exports = router;