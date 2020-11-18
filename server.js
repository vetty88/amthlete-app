const express = require("express");
const bodyParser = require("body-parser");



const mongoose = require("mongoose");
const connection = "mongodb+srv://vetty88:fXP1EMS6Ww0nANsY@cluster0.0cv9z.gcp.mongodb.net/equestrianDB?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

const routes = require("./routes");
const app = express();
app.use(bodyParser.json());


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/reactcms',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );

// Start the API server
let server = app.listen(process.env.PORT || 3000, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
});