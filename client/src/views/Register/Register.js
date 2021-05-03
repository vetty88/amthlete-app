import React, { useState, useEffect, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
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


export default function Register() {
  // interface State { inputValue: string; }


  // Setting our component's initial state
  const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState({});

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

  // Deletes a user from the database with a given id, then reloads users from the db
  // function deleteUser(id) {
  //   API.deleteUser(id)
  //     .then(res => loadUsers())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject,  [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.email) {
      API.saveUser({
          name: formObject.name,
          email: formObject.email,
          password: formObject.password,
          date: new Date (this.date),
        })
        .then(res => loadUsers())
        .catch(err => console.log(err));
    }
  };
  const classes = useStyles();

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
  

  return (
  <div>
    <Row>
    <GridContainer>
      <Col size="md-12">
      <form>
        <Card>
          <CardHeader color="primary">
            <GridItem xs={12} sm={12} md={12}>
              <h4 className={classes.cardTitleWhite}>Add User</h4>
              <p className={classes.cardCategoryWhite}>Register a New User! </p>
            </GridItem>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
              Name
                <TextInput label="User Name" id="user-name" defaultValue="" onChange={handleInputChange} name="name" placeholder="User Name (required)"  />
              </GridItem>
             
              <GridItem xs={12} sm={12} md={6}>
              Email
                <TextInput label="User Email" id="email" type="string" defaultValue="" onChange={handleInputChange}   name="email" placeholder="User Email" />
                
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
              Password
                <TextInput label="User Password" id="password" onChange={handleInputChange} name="password" placeholder="Password (required)" />
              </GridItem>
              
                           
            </GridContainer>
          </CardBody>
          <CardFooter>
            <FormBtn color="primary" disabled={!(formObject.name && formObject.email)} onClick={handleFormSubmit}>
              Submit User
            </FormBtn>
          </CardFooter>
        </Card>
      </form>
      </Col>

      <Col size="md-12">
      <GridItem xs={12} sm={12} md={12}>
        <h3>Users</h3>
        {users.length ? (
        <List>
          {users.map(user => (
          <ListItem key={user.email}>
            <Link to={"/admin/users/" + user.email}>
            <strong> {user.name} with {user.email} </strong>
            </Link>
            <DeleteBtn onClick={()=> deleteUser(user.emal)} />
          </ListItem>
          ))}
        </List>
        ) : (
        <h3>No Results to Display</h3>
        )}
      </GridItem>

      </Col>
    </GridContainer>
  </Row>
  </div>
  );
  }

// class Register extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       password2: "",
//       errors: {}
//     };
//   }

//   componentDidMount() {
//     // If logged in and user navigates to Register page, should redirect them to dashboard
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push("/dashboard");
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.errors) {
//       this.setState({
//         errors: nextProps.errors
//       });
//     }
//   }

//   onChange = e => {
//     this.setState({ [e.target.id]: e.target.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       password2: this.state.password2
//     };

//     this.props.registerUser(newUser, this.props.history);
//   };

//   render() {
//     const { errors } = this.state;
//     return (
//       <div id="registerBg">
//         <h1 className="text-center pt-5 display-3 pb-5">
//           <img
//             src="https://www.freeiconspng.com/uploads/pokemon-ball-png-1.png"
//             width="50"
//             alt="Horse ball png"
//           />
//           <span
//             style={{
//               fontFamily: "monospace",
//               fontWeight: "bold",
//               letterSpacing: "0.07em"
//             }}
//           >
//             {" "}
//             Horse Encyclopedia{" "}
//           </span>

//           <img
//             src="https://raw.githubusercontent.com/rozy97/pic/master/PinClipart.com_wiki-clipart_168408.png"
//             width="80"
//             alt="Horse ball png"
//           />
//         </h1>

//         <div className="box mt-5">
//           <form noValidate onSubmit={this.onSubmit} autoComplete="off">
//             <div className="inputBox">
//               <input
//                 autoComplete="off"
//                 required
//                 onChange={this.onChange}
//                 value={this.state.name}
//                 error={errors.name}
//                 id="name"
//                 type="text"
//               />
//               <label htmlFor="name">Name</label>
//               <span className="red-text">{errors.name}</span>
//             </div>
//             <div className="inputBox">
//               <input
//                 autoComplete="off"
//                 required
//                 onChange={this.onChange}
//                 value={this.state.email}
//                 error={errors.email}
//                 id="email"
//                 type="email"
//                 className={classnames("", {
//                   invalid: errors.email
//                 })}
//               />
//               <label htmlFor="email">Email</label>
//               <span className="red-text">{errors.email}</span>
//             </div>
//             <div className="inputBox">
//               <input
//                 autoComplete="off"
//                 required
//                 onChange={this.onChange}
//                 value={this.state.password}
//                 error={errors.password}
//                 id="password"
//                 type="password"
//                 className={classnames("", {
//                   invalid: errors.password
//                 })}
//               />
//               <label htmlFor="password">Password</label>
//               <span className="red-text">{errors.password}</span>
//             </div>
//             <div className="inputBox">
//               <input
//                 autoComplete="off"
//                 required
//                 onChange={this.onChange}
//                 value={this.state.password2}
//                 error={errors.password2}
//                 id="password2"
//                 type="password"
//                 className={classnames("", {
//                   invalid: errors.password2
//                 })}
//               />
//               <label htmlFor="password2">Confirm Password</label>
//               <span className="red-text">{errors.password2}</span>
//             </div>
//             <div className="">
//               <input type="submit" name="submit" value="Register" />

//               <p className="text-white mt-2">
//                 Already have an account? <Link to="/login">Log in</Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.string.isRequired,
//   errors: PropTypes.string.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(
//   mapStateToProps,
//   { registerUser }
// )(withRouter(Register));

// // import React, { Component } from 'react'
// // import axios from 'axios'

// // class Register extends Component {
// // 	constructor() {
// // 		super()
// // 		this.state = {
// // 			username: '',
// // 			password: '',
// // 			confirmPassword: '',

// // 		}
// // 		this.handleSubmit = this.handleSubmit.bind(this)
// // 		this.handleChange = this.handleChange.bind(this)
// // 	}
// // 	handleChange(event) {
// // 		this.setState({
// // 			[event.target.name]: event.target.value
// // 		})
// // 	}
// // 	handleSubmit(event) {
// // 		console.log('register handleSubmit, username: ')
// // 		console.log(this.state.username)
// // 		event.preventDefault()

// // 		//request to server to add a new username/password
// // 		axios.post('/user/', {
// // 			username: this.state.username,
// // 			password: this.state.password
// // 		})
// // 			.then(response => {
// // 				console.log(response)
// // 				if (!response.data.errmsg) {
// // 					console.log('successful register')
// // 					this.setState({ //redirect to login page
// // 						redirectTo: '/login'
// // 					})
// // 				} else {
// // 					console.log('username already taken')
// // 				}
// // 			}).catch(error => {
// // 				console.log('register error: ')
// // 				console.log(error)

// // 			})
// // 	}


// // render() {
// // 	return (
// // 		<div className="SignupForm">
// // 			<h4>Sign up</h4>
// // 			<form className="form-horizontal">
// // 				<div className="form-group">
// // 					<div className="col-1 col-ml-auto">
// // 						<label className="form-label" htmlFor="username">Username</label>
// // 					</div>
// // 					<div className="col-3 col-mr-auto">
// // 						<input className="form-input"
// // 							type="text"
// // 							id="username"
// // 							name="username"
// // 							placeholder="Username"
// // 							value={this.state.username}
// // 							onChange={this.handleChange}
// // 						/>
// // 					</div>
// // 				</div>
// // 				<div className="form-group">
// // 					<div className="col-1 col-ml-auto">
// // 						<label className="form-label" htmlFor="password">Password: </label>
// // 					</div>
// // 					<div className="col-3 col-mr-auto">
// // 						<input className="form-input"
// // 							placeholder="password"
// // 							type="password"
// // 							name="password"
// // 							value={this.state.password}
// // 							onChange={this.handleChange}
// // 						/>
// // 					</div>
// // 				</div>
// // 				<div className="form-group ">
// // 					<div className="col-7"></div>
// // 					<button
// // 						className="btn btn-primary col-1 col-mr-auto"
// // 						onClick={this.handleSubmit}
// // 						type="submit"
// // 					>Sign up</button>
// // 				</div>
// // 			</form>
// // 		</div>

// // 	)
// // }
// // }

// // export default Register