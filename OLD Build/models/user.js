var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

var UserSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  hash: String,
  salt: String
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});
UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

UserSchema.methods.toAuthJSON = function(){
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
  };
};

mongoose.model('User', UserSchema);
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

// const User = mongoose.model("User", userSchema);

// module.exports = User;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Create Schema
// const userSchema = new Schema({
//  
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