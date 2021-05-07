import React, { useState, useEffect, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import API from "../../utils/API";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {  Button, Select, Input } from 'semantic-ui-react'
import {  Col,  Row } from "../../components/Grid/index";
import {  List, ListItem  } from "../../components/List/List";
import {  makeStyles } from "@material-ui/core/styles";
import {  TextInput,  TextArea, FormBtn   } from "../../components/Forms/UserForm";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardHeader from "../../components/Card/CardHeader.js";
import DeleteBtn from "../../components/Buttons/DeleteBtn";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import moment from "moment";

var mongoose = require('mongoose'),
  // jwt = require('jsonwebtoken'),
  // bcrypt = require('bcrypt'),
  User = mongoose.model('User');

const register = function(req, res) {
  var newUser = new User(req.body);
  
//   newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
//   newUser.save(function(err, user) {
//     if (err) {
//       return res.status(400).send({
//         message: err
//       });
//     } else {
//       user.hash_password = undefined;
//       return res.json(user);
//     }
//   });
};




export default function Login() {
  // interface State { inputValue: string; }

  const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
  };

  const useStyles = makeStyles(styles);

    // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject,  [name]: value })
  };


  // Setting our component's initial state
  const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState({});


  // Load all users and store them with setUsers
  useEffect(() => {
    loadUsers()
  }, []);

  // Loads all users and sets them to users
  function loadUsers() {
    API.getUsers()
      .then(res =>
        setUsers(res.data)
      )
      .catch(err => console.log(err));
  };

   function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.loginName && formObject.loginEmail) {
    console.log("wrong credentials");
    return;
  } else {
    users.findOne({
        Email: user.email,
        Password: user.password
      });
      if (data) {
        console.log("goto next page");
      } else {
        console.log("wrong");
      }
    }

  const login = function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
    }
     return res.json({ email: user.email, fullName: user.fullName, _id: user._id });
    // return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
  });
};

const loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {

    return res.status(401).json({ message: 'Unauthorized user!!' });
  }
};
const dashboard = function(req, res, next) {
  if (req.user) {
    res.send(req.user);
    next();
  } 
  else {
   return res.status(401).json({ message: 'Invalid token' });
  }
};
  }
// }
const loginUser = ({
    loginName: formObject.loginName,
    loginEmail: formObject.loginEmail,
    loginPassword: formObject.loginPassword,
  })
  console.log(loginUser);

    // }
  


    // const [value, onChange] = useState(new Date());
  
    // const onDateChange=(newDate)=>{
    //  //Your custom code here
    //  props.handleOnclick(newDate);
    //  onChange(newDate);
    // };

//     var curr = new Date();
// curr.setDate(curr.getDate()+1);
// var thisDate = curr.toISOString().substr(0,10);

// curr.setDate(curr.getDate() + 3);
// var thisDate = curr.toISOString().substr(0,10);

  const classes = useStyles();
  

  return (
  <div>
    <Row>
    <GridContainer>
      <Col size="md-12">
      <form>
        <Card>
          <CardHeader color="primary">
            <GridItem xs={12} sm={12} md={12}>
              <h4 className={classes.cardTitleWhite}>Login User</h4>
              <p className={classes.cardCategoryWhite}>Login User! </p>
            </GridItem>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
              Name
                <TextInput label="User Name" id="login-user-name" defaultValue="" onChange={handleInputChange} name="loginName" placeholder="User Name (required)"  />
              </GridItem>
             
              <GridItem xs={12} sm={12} md={6}>
              Email
                <TextInput label="User Email" id="login-email" type="string" defaultValue="" onChange={handleInputChange}   name="loginEmail" placeholder="User Email" />
                
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
              Password
                <TextInput label="User Password" id="login-password" onChange={handleInputChange} name="loginPassword" placeholder="Password (required)" />
              </GridItem>
              
                           
            </GridContainer>
          </CardBody>
          <CardFooter>
            <FormBtn color="primary" disabled={!(formObject.loginName && formObject.loginEmail)} onClick={handleFormSubmit}>
              Submit User
            </FormBtn>
          </CardFooter>
        </Card>
      </form>
      </Col>

    </GridContainer>
  </Row>
  </div>
  );
  }

// export Login();

// import React, { useState, useEffect, Component } from "react";
// import API from "../../utils/API";
// import {  Button, Select, Input } from 'semantic-ui-react'
// import {  TextInput,  TextArea, FormBtn   } from "../../components/Forms/UserForm";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { user } from "../../actions/authActions";
// import classnames from "classnames";
// import { makeStyles } from "@material-ui/core/styles";
// // import Jumping from "../../assets/img/";

// export default function Login() {
//   // interface State { inputValue: string; }


//   // Setting our component's initial state
//   const [users, setUsers] = useState([]);
//   const [formObject, setFormObject] = useState({});

//     const styles = {
//     cardCategoryWhite: {
//       color: "rgba(255,255,255,.62)",
//       margin: "0",
//       fontSize: "14px",
//       marginTop: "0",
//       marginBottom: "0"
//     },
//     cardTitleWhite: {
//       color: "#FFFFFF",
//       marginTop: "0px",
//       minHeight: "auto",
//       fontWeight: "300",
//       fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//       marginBottom: "3px",
//       textDecoration: "none"
//     }
//   };

//   const useStyles = makeStyles(styles);

//   // Load all users and store them with setUsers
//   useEffect(() => {
//     loadUsers()
//   }, []);

//   // Loads all users and sets them to users
//   function loadUsers() {
//     API.getUsers()
//       .then(res =>
//         setUsers(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a user from the database with a given id, then reloads users from the db
//   // function deleteUser(id) {
//   //   API.deleteUser(id)
//   //     .then(res => loadUsers())
//   //     .catch(err => console.log(err));
//   // }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({ ...formObject,  [name]: value })
//   };

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.name && formObject.email) {
//       API.saveUser({
//           name: formObject.name,
//           email: formObject.email,
//           password: formObject.password,
//           // date: new Date (),
//         })
//         .then(res => loadUsers())
//         .catch(err => console.log(err));
//     }
//   };
//   const classes = useStyles();

//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     email: "",
//   //     password: "",
//   //     errors: {}
//   //   };
//   // }

//   // componentDidMount() {
//     // If logged in and user navigates to Login page, should redirect them to dashboard
//   //   if (this.props.auth.isAuthenticated) {
//   //     this.props.history.push("/admin/adminDashboard");
//   //   }
//   // }

//   // componentWillReceiveProps(nextProps) {
//   //   if (nextProps.auth.isAuthenticated) {
//   //     this.props.history.push("/admin/adminDashboard"); // push user to dashboard when they login
//   //   }
//   //   if (nextProps.errors) {
//   //     this.setState({
//   //       errors: nextProps.errors
//   //     });
//   //   }
//   // }

//   // onChange = e => {
//   //   this.setState({ [e.target.id]: e.target.value });
//   // };
//   // onSubmit = e => {
//   //   e.preventDefault();
//   //   const userData = {
//   //     email: this.state.email,
//   //     password: this.state.password
//   //   };
//   //   this.props.user(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
//   // };
//   // render() {
//     // const { errors } = this.state;
//     return (
//       <div id="loginBg">
//         <h1
//           className="text-center pt-5 display-3"
//         >
   
//           <span
//             style={{
//               fontFamily: "monospace",
//               fontWeight: "bold",
//               letterSpacing: "0.07em"
//               // fontStyle: "italic"
//             }}
//           >
//             {" "}
//             Horse Encyclopedia{" "}
//           </span>

//         </h1>
//         <div className="box">
//           <form> 
//             <div className="inputBox">
//               <TextInput
//                 autoComplete="off"
//                 required
//                 onChange={handleInputChange}
//                 // value={this.state.email}
//                 // error={errors.email}
//                 id="email"
//                 type="email"
//                 // className={classnames("", {
//                 //   invalid: errors.email || errors.emailnotfound
//                 // })}
//               />
//               <label htmlFor="email">Email</label>
//               <span className="red-text">
//                 {/* {errors.email}
//                 {errors.emailnotfound} */}
//               </span>
//             </div>
//             <div className="inputBox">
//               <TextInput
//                 required
//                 onChange={handleInputChange}
//                 // value={this.state.password}
//                 // error={errors.password}
//                 id="password"
//                 type="password"
//                 // className={classnames("", {
//                 //   invalid: errors.password || errors.passwordincorrect
//                 // })}
//               />
//               <label htmlFor="password">Password</label>
//               {/* <span className="red-text">
//                 {errors.password}
//                 {errors.passwordincorrect}
//               </span> */}
//             </div>
//             <div className="m-auto">
//               <TextInput type="submit" name="submit" value="Login" />
//               <p className="text-white mt-2">
//                 Don't have an account? <Link to="/login">Login</Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }


// Login.propTypes = {
//   user: PropTypes.func.isRequired,
//   auth: PropTypes.string.isRequired,
//   errors: PropTypes.string.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export function connect (
//   mapStateToProps,
//   { user }
// ){Login}
