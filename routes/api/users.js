// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/config");

// // Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// // Load User model
// const User = require("../../models/User");

// // @route POST api/users/register
// // @desc Register user
// // @access Public
// router.post("/register", (req, res) => {
//   // Form validation
//   const { errors, isValid } = validateRegisterInput(req.body);
//   // Check validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   User.findOne({ email: req.body.email }).then(user => {
//     if (user) {
//       return res.status(400).json({ email: "Email already exists" });
//     } else {
//       const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//       });
//       // Hash password before saving in database
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err));
//         });
//       });
//     }
//   });
// });

// // @route POST api/users/login
// // @desc Login user and return JWT token
// // @access Public
// router.post("/login", (req, res) => {
//   // Form validation
//   const { errors, isValid } = validateLoginInput(req.body);
//   // Check validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   const email = req.body.email;
//   const password = req.body.password;
//   // Find user by email
//   User.findOne({ email }).then(user => {
//     // Check if user exists
//     if (!user) {
//       return res.status(404).json({ emailnotfound: "Email not found" });
//     }
//     // Check password
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         // User matched
//         // Create JWT Payload
//         const payload = {
//           id: user.id,
//           name: user.name
//         };
//         // Sign token
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           {
//             expiresIn: 31556926 // 1 year in seconds
//           },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: "Bearer " + token
//             });
//           }
//         );
//       } else {
//         return res
//           .status(400)
//           .json({ passwordincorrect: "Password incorrect" });
//       }
//     });
//   });
// });

// module.exports = router;

const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/admin/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/admin/users/:email"
router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;

// const express = require("express");
// const router = require("express").Router();
// const userController = require("../../controllers/userController")
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/config");

// // Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// // Load User model
// const User = require("../../models/user");

// // @route POST api/users/register
// // @desc Register user
// // @access Public
// router.post("/register", (req, res) => {
//   // Form validation
//   const { errors, isValid } = validateRegisterInput(req.body);
//   // Check validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   User.findOne({ email: req.body.email }).then(user => {
//     if (user) {
//       return res.status(400).json({ email: "Email already exists" });
//     } else {
//       const newUser = new user({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//       });
//       // Hash password before saving in database
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err));
//         });
//       });
//     }
//   });
// });

// // @route POST api/users/login
// // @desc Login user and return JWT token
// // @access Public
// router.post("/login", (req, res) => {
//   // Form validation
//   const { errors, isValid } = validateLoginInput(req.body);
//   // Check validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   const email = req.body.email;
//   const password = req.body.password;
//   // Find user by email
//   User.findOne({ email }).then(user => {
//     // Check if user exists
//     if (!user) {
//       return res.status(404).json({ emailnotfound: "Email not found" });
//     }
//     // Check password
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         // User matched
//         // Create JWT Payload
//         const payload = {
//           id: user.id,
//           name: user.name
//         };
//         // Sign token
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           {
//             expiresIn: 31556926 // 1 year in seconds
//           },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: "Bearer " + token
//             });
//           }
//         );
//       } else {
//         return res
//           .status(400)
//           .json({ passwordincorrect: "Password incorrect" });
//       }
//     });
//   });
// });

// module.exports = router;

// const User = require('../../models/user');
// module.exports = (app) => {
//   /*
//    * Sign up
//    */
//   app.post('/api/account/register', (req, res, next) => {
//     const { body } = req;
//     const {
//       password
//     } = body;
//     let {
//       email
//     } = body;
    
//     if (!email) {
//       return res.send({
//         success: false,
//         message: 'Error: Email cannot be blank.'
//       });
//     }
//     if (!password) {
//       return res.send({
//         success: false,
//         message: 'Error: Password cannot be blank.'
//       });
//     }
//     email = email.toLowerCase();
//     email = email.trim();
//     // Steps:
//     // 1. Verify email doesn't exist
//     // 2. Save
//     User.find({
//       email: email
//     }, (err, previousUsers) => {
//       if (err) {
//         return res.send({
//           success: false,
//           message: 'Error: Server error'
//         });
//       } else if (previousUsers.length > 0) {
//         return res.send({
//           success: false,
//           message: 'Error: Account already exist.'
//         });
//       }
//       // Save the new user
//       const newUser = new User();
//       newUser.email = email;
//       newUser.password = newUser.generateHash(password);
//       newUser.save((err, user) => {
//         if (err) {
//           return res.send({
//             success: false,
//             message: 'Error: Server error'
//           });
//         }
//         return res.send({
//           success: true,
//           message: 'Signed up'
//         });
//       });
//     });
//   }); // end of register endpoint
// };