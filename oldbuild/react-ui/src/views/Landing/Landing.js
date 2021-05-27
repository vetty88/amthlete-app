import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class Landing extends Component {
  render() {
    return <Redirect to="/login" />;
  }
}
export default Landing;

// import React from 'react';
// import setAuthToken from "../../utils/setAuthToken";


// export const Landing = props => {
// return (
//   <div>
//     <h1>Landing Page</h1>
//     <button 
//       onClick={() => {
//         setAuthtoken.loginUser(() => {
//           props.history.push("/app");
//         });
//       }}
//       > 
//         Login 
//     </button>
//   </div>
// );
// };

// import React, { Component } from 'react';
// import 'whatwg-fetch';

// import {
//   getFromStorage,
//   setInStorage,
// } from "../../utils/storage.js";

// class Landing extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoading: true,
//       token: '',
//       registerError: '',
//       loginError: '',
//       loginEmail: '',
//       loginPassword: '',
//       registerEmail: '',
//       registerPassword: '',
//     };

//     this.onTextboxChangeLoginEmail = this.onTextboxChangeLoginEmail.bind(this);
//     this.onTextboxChangeLoginPassword = this.onTextboxChangeLoginPassword.bind(this);
//     this.onTextboxChangeRegisterEmail = this.onTextboxChangeRegisterEmail.bind(this);
//     this.onTextboxChangeRegisterPassword = this.onTextboxChangeRegisterPassword.bind(this);
  
//     this.onLogin = this.onLogin.bind(this);
//     this.onRegister = this.onRegister.bind(this);
//     this.logout = this.logout.bind(this);
//   }

//   componentDidMount() {
//     const obj = getFromStorage('the_main_app');
//     if (obj && obj.token) {
//       const { token } = obj;
//       // Verify token
//       fetch('/api/account/verify?token=' + token)
//         .then(res => res.json())
//         .then(json => {
//           if (json.success) {
//             this.setState({
//               token,
//               isLoading: false
//             });
//           } else {
//             this.setState({
//               isLoading: false,
//             });
//           }
//         });
//     } else {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   }

//   onTextboxChangeLoginEmail(event) {
//     this.setState({
//       loginEmail: event.target.value,
//     });
//   }

//   onTextboxChangeLoginPassword(event) {
//     this.setState({
//       loginPassword: event.target.value,
//     });
//   }

//   onTextboxChangeRegisterEmail(event) {
//     this.setState({
//       registerEmail: event.target.value,
//     });
//   }

//   onTextboxChangeRegisterPassword(event) {
//     this.setState({
//       registerPassword: event.target.value,
//     });
//   }

//   onRegister() {
//     // Grab state
//     const {
//       registerEmail,
//       registerPassword,
//     } = this.state;

//     this.setState({
//       isLoading: true,
//     });

//     // Post request to backend
//     fetch('/api/account/register', {
//       method: 'COMP',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: registerEmail,
//         password: registerPassword,
//       }),
//     }).then(res => res.json())
//       .then(json => {
//         console.log('json', json);
//         if (json.success) {
//           this.setState({
//             registerError: json.message,
//             isLoading: false,
//             registerEmail: '',
//             registerPassword: '',
//           });
//         } else {
//           this.setState({
//             registerError: json.message,
//             isLoading: false,
//           });
//         }
//       });
//   }

//   onLogin() {
//     // Grab state
//     const {
//       loginEmail,
//       loginPassword,
//     } = this.state;

//     this.setState({
//       isLoading: true,
//     });

//     // Post request to backend
//     fetch('/api/account/login', {
//       method: 'COMP',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: loginEmail,
//         password: loginPassword,
//       }),
//     }).then(res => res.json())
//       .then(json => {
//         console.log('json', json);
//         if (json.success) {
//           setInStorage('the_main_app', { token: json.token });
//           this.setState({
//             loginError: json.message,
//             isLoading: false,
//             loginPassword: '',
//             loginEmail: '',
//             token: json.token,
//           });
//         } else {
//           this.setState({
//             loginError: json.message,
//             isLoading: false,
//           });
//         }
//       });
//   }

//   logout() {
//     this.setState({
//       isLoading: true,
//     });
//     const obj = getFromStorage('the_main_app');
//     if (obj && obj.token) {
//       const { token } = obj;
//       // Verify token
//       fetch('/api/account/logout?token=' + token)
//         .then(res => res.json())
//         .then(json => {
//           if (json.success) {
//             this.setState({
//               token: '',
//               isLoading: false
//             });
//           } else {
//             this.setState({
//               isLoading: false,
//             });
//           }
//         });
//     } else {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   }

//   render() {
//     const {
//       isLoading,
//       token,
//       loginError,
//       loginEmail,
//       loginPassword,
//       registerEmail,
//       registerPassword,
//       registerError,
//     } = this.state;

//     if (isLoading) {
//       return (<div><p>Loading...</p></div>);
//     }

//     if (!token) {
//       return (
//         <div>
//           <div>
//             {
//               (loginError) ? (
//                 <p>{loginError}</p>
//               ) : (null)
//             }
//             <p>Login</p>
//             <input
//               type="email"
//               placeholder="Email"
//               value={loginEmail}
//               onChange={this.onTextboxChangeLoginEmail}
//             />
//             <br />
//             <input
//               type="password"
//               placeholder="Password"
//               value={loginPassword}
//               onChange={this.onTextboxChangeLoginPassword}
//             />
//             <br />
//             <button onClick={this.onLogin}>Login</button>
//           </div>
//           <br />
//           <br />
//           <div>
//             {
//               (registerError) ? (
//                 <p>{registerError}</p>
//               ) : (null)
//             }
//             <p>Register</p>
//             <input
//               type="email"
//               placeholder="Email"
//               value={registerEmail}
//               onChange={this.onTextboxChangeRegisterEmail}
//             /><br />
//             <input
//               type="password"
//               placeholder="Password"
//               value={registerPassword}
//               onChange={this.onTextboxChangeRegisterPassword}
//             /><br />
//             <button onClick={this.onRegister}>Register</button>
//           </div>

//         </div>
//       );
//     }

//     return (
//       <div>
//         <p>Account</p>
//         <button onClick={this.logout}>Logout</button>
//       </div>
//     );
//   }
// }

// export default Landing;