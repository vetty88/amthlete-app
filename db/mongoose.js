const express = require('express');
var mongoose = require('mongoose');
require('./db/mongoose');
// hosting set up
const app = express();
const port = process.env.PORT || 3000;
// Model setup
const User = require('./models/User');
// check the update is applicable
app.use(express.json());
app.use(function (req, res, next) {
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
// Pass to next layer of middleware
next();
});
app.listen(port, () => {
console.log('Server is up on port ' + port);
})
//User endpoints
app.get('/user', (req,res) => {
User.find({}).then((users) => {
res.status(200).send(users)
}).catch((err) => {
res.status(400).send(err)
})
});