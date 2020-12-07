const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Competition = require('../../models/Competition');

router.get('/', function(req, res){
res.render('index');
});

router.route('/insert')
.post(function(req,res) {
  const competition = new Competition();
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
  const doc = {
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
  const id = req.query.id;
  Competition.find({_id: id}).remove().exec(function(err, competition) {
  if(err)
  res.send(err);
  res.send('Competition successfully deleted!');
  });
});

router.get('/getAll',function(req, res) {
  const eventTypeRec = req.query.eventType;
  const penaltiesRec = req.query.penalties;
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