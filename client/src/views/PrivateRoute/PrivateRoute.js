import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // auth.isAuthenticated === true ? (
        <Component {...props} />
      // ) : (
      //   <Redirect to="/login" />
      // )
    }
  />
);


export default PrivateRoute;

// privateRoute.propTypes = {
//   auth: PropTypes.string.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(privateRoute);

// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import auth from "../.../actions/authActions"

// export const ProtectedRoute = ({
//   component: Component, 
//   ...rest
//   }) => {
//     return (
//       <Route 
//         {...rest} 
//         render= {props => {
//           if (auth.isAuthenticated()) {
//             return <Component {...props} />;
//           } else {
//             return (
//               <Redirect 
//                 to={{
//                   pathname: "/",
//                   state: {
//                     from: props.location
//                   }
//                 }}
//               />
//             );
//           }
//         }}
//       />
//     );
// };
  
// // import { Route, Redirect } from "react-router-dom";
// // import { connect } from "react-redux";
// // import PropTypes from "prop-types";
// // const PrivateRoute = ({ component: Component, auth, ...rest }) => (
// //   <Route
// //     {...rest}
// //     render={props =>
// //       auth.isAuthenticated === true ? (
// //         <Component {...props} />
// //       ) : (
// //         <Redirect to="/login" />
// //       )
// //     }
// //   />
// // );
// // PrivateRoute.propTypes = {
// //   auth: PropTypes.string.isRequired
// // };
// // const mapStateToProps = state => ({
// //   auth: state.auth
// // });
// // export default connect(mapStateToProps)(PrivateRoute);