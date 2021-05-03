const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  uniqueName: { type: String, unique: true, required: true },
  birthYear: { type: String, required: true },
  breed: { type: String, required: true },
  height: { type: String, required: true },
  colour: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Create Schema
// const userSchema = new Schema({
//   name: { type: String, required: true  },
//   email: { type: String, required: true },
//   password: { type: String, required: true  },
//   date: { type: Date, default: Date.now  }
// });

// // // Create Schema
// // const UserSchema = new Schema({
// //   name: {
// //     type: String,
// //     required: true
// //   },
// //   email: {
// //     type: String,
// //     required: true
// //   },
// //   password: {
// //     type: String,
// //     required: true
// //   },
// //   date: {
// //     type: Date,
// //     default: Date.now
// //   }
// // });

// module.exports = User = mongoose.model("users", UserSchema);

// // const mongoose = require("mongoose");
// // const Schema = mongoose.Schema;



// // const User = mongoose.model("User", userSchema);

// // module.exports = User;