// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";
// // import Jumping from "../../assets/img/";

// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//       errors: {}
//     };
//   }

//   componentDidMount() {
//     // If logged in and user navigates to Login page, should redirect them to dashboard
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push("/dashboard");
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.auth.isAuthenticated) {
//       this.props.history.push("/dashboard"); // push user to dashboard when they login
//     }
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
//     const userData = {
//       email: this.state.email,
//       password: this.state.password
//     };
//     this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
//   };
//   render() {
//     const { errors } = this.state;
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
//           <form noValidate onSubmit={this.onSubmit} autoComplete="off">
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
//                   invalid: errors.email || errors.emailnotfound
//                 })}
//               />
//               <label htmlFor="email">Email</label>
//               <span className="red-text">
//                 {errors.email}
//                 {errors.emailnotfound}
//               </span>
//             </div>
//             <div className="inputBox">
//               <input
//                 required
//                 onChange={this.onChange}
//                 value={this.state.password}
//                 error={errors.password}
//                 id="password"
//                 type="password"
//                 className={classnames("", {
//                   invalid: errors.password || errors.passwordincorrect
//                 })}
//               />
//               <label htmlFor="password">Password</label>
//               <span className="red-text">
//                 {errors.password}
//                 {errors.passwordincorrect}
//               </span>
//             </div>
//             <div className="m-auto">
//               <input type="submit" name="submit" value="Login" />
//               <p className="text-white mt-2">
//                 Don't have an account? <Link to="/register">Register</Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.string.isRequired,
//   errors: PropTypes.string.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(Login);

// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import axios from 'axios'

// class Login extends Component {
//     constructor() {
//         super()
//         this.state = {
//             username: '',
//             password: '',
//             redirectTo: null
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleChange = this.handleChange.bind(this)
  
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSubmit(event) {
//         event.preventDefault()
//         console.log('handleSubmit')

//         axios
//             .post('/user/login', {
//                 username: this.state.username,
//                 password: this.state.password
//             })
//             .then(response => {
//                 console.log('login response: ')
//                 console.log(response)
//                 if (response.status === 200) {
//                     // update App.js state
//                     this.props.updateUser({
//                         loggedIn: true,
//                         username: response.data.username
//                     })
//                     // update the state to redirect to home
//                     this.setState({
//                         redirectTo: '/'
//                     })
//                 }
//             }).catch(error => {
//                 console.log('login error: ')
//                 console.log(error);
                
//             })
//     }

//     render() {
//         if (this.state.redirectTo) {
//             return <Redirect to={{ pathname: this.state.redirectTo }} />
//         } else {
//             return (
//                 <div>
//                     <h4>Login</h4>
//                     <form className="form-horizontal">
//                         <div className="form-group">
//                             <div className="col-1 col-ml-auto">
//                                 <label className="form-label" htmlFor="username">Username</label>
//                             </div>
//                             <div className="col-3 col-mr-auto">
//                                 <input className="form-input"
//                                     type="text"
//                                     id="username"
//                                     name="username"
//                                     placeholder="Username"
//                                     value={this.state.username}
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <div className="col-1 col-ml-auto">
//                                 <label className="form-label" htmlFor="password">Password: </label>
//                             </div>
//                             <div className="col-3 col-mr-auto">
//                                 <input className="form-input"
//                                     placeholder="password"
//                                     type="password"
//                                     name="password"
//                                     value={this.state.password}
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-group ">
//                             <div className="col-7"></div>
//                             <button
//                                 className="btn btn-primary col-1 col-mr-auto"
                               
//                                 onClick={this.handleSubmit}
//                                 type="submit">Login</button>
//                         </div>
//                     </form>
//                 </div>
//             )
//         }
//     }
// }

// export default Login