const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}

// connect to the db

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/reactcompetinglist',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


// Add routes, both API and view

app.use(require("./routes/api/competitions.js"));
app.use(require("./routes/api/index.js"));
app.use(require("./routes/index.js"));


// Start the API server
app.listen(PORT, function() {//
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// proxy.web(req, res, {
//   target: 'http://' + hostname + ':' + port,
//   changeOrigin: true
// });
