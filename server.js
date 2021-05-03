// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const cors = require("cors");
// const path = require("path");

// const users = require("./routes/api/users");
// const horses = require("./routes/api/horses");
// const competitions = require("./routes/api/competitions")

// const app = express();

// // Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
// app.use(cors());

// // DB Config
// const db = require("./config/config").mongoURI;

// // Connect to MongoDB
// mongoose
//   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));
// const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// // Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);
// // Routes
// app.use("/api/users", users);
// app.use("/api/horses", horses);
// app.use("/api/competitions", competitions);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// app.listen(port, () => console.log(`Server up and running on port ${port} !`));
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// //import routes
// const authRoutes = require('./routes/auth');

// //app
// const app = express();


// // db
// mongoose
//     .connect(process.env.DATABASE,{
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log('DB Connected'));

// //middlewares
// app.use(bodyParser.json());
// app.use(cors());

// //routes middleware
// app.use('/api', authRoutes);

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log(`Server is running on ${port}`)
// });





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
//app
const app = express();
// db
mongoose
 .connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
 .then(() => console.log('DB Connected'));

 const routes = require("./routes");

 // // Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// // Add routes, both API and view
app.use(routes);

//middlewares
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });


// // // Connect to the Mongo DB
// // mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/equestriancompsdb");
