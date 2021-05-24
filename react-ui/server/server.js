const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const horses = require("./routes/api/horses");
const competitions = require("./routes/api/competitions");

const app = express();
app.use(cors());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/equestriancompsdb");
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/horses", horses);
app.use("/api/competitions", competitions);

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});