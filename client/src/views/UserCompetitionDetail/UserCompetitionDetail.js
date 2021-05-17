// import React, { Component } from 'react';
// import { Formik } from "formik";
// import * as Yup from 'yup';
// import axios from 'axios';
// import swal from 'sweetalert';
// import fs from 'fs';
// const FILE_SIZE = 160 * 1024
// const SUPPORTED_FORMATS = ['competition/jpg', 'competition/jpeg', 'competition/gif', 'competition/png']
// const UserSchema = Yup.object().shape({
//   names: Yup.mixed()
//     .required('A file is required')
//     .test(
//       'fileSize',
//       'File too large',
//       value => value && value.size <= FILE_SIZE
//     )
//     .test(
//       'fileFormat',
//       'Unsupported Format',
//       value => value && SUPPORTED_FORMATS.includes(value.type)
//     ),
//   name: Yup.string()
//     .min(2, 'name is Too Short!')
//     .max(50, 'name is Too Long!')
//     .required('name is Required'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Email is Required')
// })

// class User extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       response: {},
//       error_message: null,
//       name: ''
//     }
//   }

//   parseJwt () {
//     let token = localStorage.getItem('TOKEN_KEY')
//     var base64Url = token.split('.')[1]
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
//     var jsonPayload = decodeURIComponent(
//       atob(base64)
//         .split('')
//         .map(function (c) {
//           return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
//         })
//         .join('')
//     )

//     return JSON.parse(jsonPayload)
//   }

//   componentDidMount () {
//     let { id } = this.parseJwt()
//     this.getData(id)
//   }

//   showPreviewImage = values => {
//     console.log(this.state.response.name)
//     return (
//       <div class='text-center'>
//         <img
//           id='names'
//         />
//       </div>
//     )
//   }
//   getData = async id => {
//     await axios
//       .get('http://localhost:3000/user/' + id)
//       .then(response => {
//         console.log(response.data)
//         document.getElementById('names').src =
//           'http://localhost:3000/competitions/' + response.data.names
//         // user.setAttribute("src",);
//         this.setState({ response: response.data })
//       })
//       .catch(error => {
//         this.setState({ error_message: error.message })
//       })
//   }
//   submitForm = async formData => {
//     await axios
//       .put('http://localhost:3000/user', formData)
//       .then(res => {
//         console.log(res.data.result)
//         if (res.data.result === 'success') {
//           swal('Success!', res.data.message, 'success').then(value => {
//             //s window.location.reload();
//           })
//         } else if (res.data.result === 'error') {
//           swal('Error!', res.data.message, 'error')
//         }
//       })
//       .catch(error => {
//         console.log(error)
//         swal('Error!', 'Unexpected error', 'error')
//       })
//   }
//   showForm = ({
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleSubmit,
//     onSubmit,
//     isSubmitting,
//     setFieldValue
//   }) => {
//     return (
//       <form role='form' onSubmit={handleSubmit}>
//         {this.showPreviewImage(values)}
//         <div className='card-body'>
//           <span style={{ color: '#00B0CD', marginLeft: 10 }}>Add Picture</span>
//           <div className='form-group'>
//             <div className='input-group'>
//               <div className='custom-file'>
//                 <input
//                   type='file'
//                   onChange={e => {
//                     e.preventDefault()
//                     setFieldValue('names', e.target.files[0]) // for upload
//                     setFieldValue(
//                       'file_obj',
//                       URL.createObjectURL(e.target.files[0])
//                     ) // for preview competition
//                   }}
//                   name='names'
//                   className={
//                     errors.email && touched.email
//                       ? 'form-control is-invalid'
//                       : 'form-control'
//                   }
//                   accept='competition/*'
//                   id='names'
//                   className='custom-file-input'
//                   id='exampleInputFile'
//                 />
//                 <label className='custom-file-label' htmlFor='exampleInputFile'>
//                   Choose file
//                 </label>
//               </div>
//             </div>
//           </div>

//           <input name='id' value={values._id} />
//           <div className='form-group has-feedback'>
//             <label htmlFor='name'>Username</label>
//             <input
//               onChange={handleChange}
//               value={values.name}
//               type='text'
//               className={
//                 errors.name && touched.name
//                   ? 'form-control is-invalid'
//                   : 'form-control'
//               }
//               id='name'
//               placeholder='Enter UserName'
//             />
//           </div>
//         </div>
//         {/* /.card-body */}
//         <div className='card-footer'>
//           <button
//             type='submit'
//             disabled={isSubmitting}
//             className='btn btn-block btn-primary'
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     )
//   }

//   render () {
//     let result = this.state.response
//     console.log(result)
//     return (
//       <div className='content-wrapper'>
//         <section className='content-header'>
//           <div className='container-fluid'>
//             <div className='row mb-2'>
//               <div className='offset-md-3 col-sm-8'>
//                 <h1>User</h1>
//               </div>
//             </div>
//           </div>
//           {/* /.container-fluid */}
//         </section>

//         <section className='content'>
//           <div className='container-fluid'>
//             <div className='row'>
//               {/* left column */}
//               <div className='offset-md-3 col-md-6'>
//                 {/* general form elements */}
//                 <div className='card card-primary'>
//                   <div className='card-header'>
//                     <h3 className='card-title'>update user</h3>
//                   </div>
//                   {/* /.card-header */}
//                   {/* form start */}
//                   <Formik
//                     enableReinitialize={true}
//                     initialValues={
//                       result
//                         ? result
//                         : {
//                             id: '',
//                             name: '',
//                             email: ''
//                           }
//                     }
//                     onSubmit={(values, { setSubmitting }) => {
//                       let formData = new FormData()
//                       formData.append('id', values._id)
//                       formData.append('name', values.name)
//                       formData.append('email', values.email)
//                       if (values.names) {
//                         formData.append('names', values.names)
//                       }
//                       console.log(values.names)
//                       this.submitForm(formData, this.props.history)
//                       setSubmitting(false)
//                     }}
//                     // validationSchema={UserSchema}
//                   >
//                     {props => this.showForm(props)}
//                   </Formik>
//                 </div>
//                 {/* /.card */}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }

// export default User

// import { Col, Row} from "../../components/Grid";
// import { faAward } from '@fortawesome/free-solid-svg-icons'
// import { faCalendar } from '@fortawesome/free-solid-svg-icons'
// import { faComments } from '@fortawesome/free-solid-svg-icons'
// import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons'
// import { faHorse } from '@fortawesome/free-solid-svg-icons'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link, useParams } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import API from "../../utils/API.js";
// import Card from "../../components/Card/Card.js";
// import CardFooter from "../../components/Card/CardFooter.js";
// import CardHeader from "../../components/Card/CardHeader.js";
// import CardIcon from "../../components/Card/CardIcon.js";
// import Container from "@material-ui/core/Container";
// import GridContainer from "../../components/Grid/GridContainer.js";
// import GridItem from "../../components/Grid/GridItem.js";
// import Jumbotron from "../../components/Jumbotron/Jumbotron";
// import Moment from "react-moment";
// import React, { useEffect, useState, Component } from "react";
// import ReactDOM from 'react-dom';
// import styles from "../../assets/jss/material-dashboard-react/views/rtlStyle.js";
// import Warning from "@material-ui/icons/Warning";
// import { connect, useSelector, useDispatch } from "react-redux";
// import CompetitionsFeed from "./CompetitionsFeed";
// import Spinner from "../common/Spinner";
// // import { getUserCompetitions } from "../../actions/competitionActions";
// import moment from "moment";
// import { Button, Table, Modal, ModalHeader, ModalBody } from "reactstrap";
// // import {
// //   setUserIDCompetitions,
// // } from "../../actions/competitionActions";
// // import { getCompetitions, filterCompetition } from ".././actions/competitionActions";
// import PropTypes from "prop-types";
// import AddCompetition from "../AddCompetition/AddCompetition";



// import React, {useEffect}from 'react';
// import {} from 'react-redux';
// import {fetchPassCat,editPassCat,deletePassCat} from '../redux';
// import { Table,Button } from 'react-bootstrap';

// function GetPassCatContainer(props) {
    
    
 
// //console.log(userDetails);
// if(allCategories){
//     var CatData=allCategories.map((val,i)=>(
//         <tr key={i}>
//      <td key={val._id}>{i+1}</td>       
//     <td>{val._id}</td>
//     <td>{val.password_category}</td>
//     <td><Button className="btn btn-primary" onClick={()=>editCategory(val._id,val.password_category)}>Edit</Button> 
//     <Button className="btn btn-danger" onClick={()=>deleteCategory(val._id)}>Delete</Button></td>
//     </tr>
//     ))

// }else{
//     CatData=<tr>
//     <td colSpan="4">No Records Found</td>       
//    </tr>
// }

//    const editCategory=(id,category)=>{
//     dispatch(editPassCat(id,category));
//    } 

//    const deleteCategory=(id)=>{
//        dispatch(deletePassCat(id));
//    }
//     //console.log(allCategories);
//     return (
//         <div>
//             <h1>All Passsword Category</h1>
//             <Table striped bordered hover size="sm">
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Category ID</th>
//                         <th>Category Name</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         CatData
//                     }
                    
//                 </tbody>
//             </Table>
 
//         </div>
//     )
// }
// export default GetPassCatContainer;

// import user from "../competitions/unnamed.png";

// const useStyles = makeStyles(styles);

// function  UserCompetitionDetail (props) { 
// const classes = useStyles();

// const user=useSelector(state=>state.user);
// const dispatch=useDispatch();

//   const [competitions, setCompetitions, loading] = useState([]);
//   const [competition, setCompetition] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [formObject, setFormObject] = useState({});
  

//   // Load all competitions and store them with setCompetitions
//   useEffect(() => {
//     loadCompetitions()
//   }, []);

//     useEffect(() => {
//     loadUsers()
//   }, []);

//   // Loads all competitions and sets them to competitions
//   function loadCompetitions() {
//     API.getCompetitions()
//       .then(res => 
//         setCompetitions(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//     function loadUsers() {
//     API.getUsers()
//       .then(res => 
//         setUsers(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // useEffect(()=>{
//   //       dispatch(loadCompetitions())
//   //   });
//   //   useSelector(state=>state.pass);

// // router.get('/users/:id',(req,res) => {
// //      User.findById(req.params.id).populate('competitions').exec((err,foundUser)=>{
// //         if (err) {
// //             req.flash('error_msg',"Something went wrong");
// //             res.redirect('/');
// //         } else {
// //             Competition.find({'author.id':foundUser.id},(err,foundUser_competitions)=>{
// //                 res.render('users/show', {userUser:foundUser, userCompetitions:foundUser_competitions});
// //             });
// //         }

// //     });
// // });

//   const loggedInUser = localStorage.getItem('loggedIn')
//   alert(loggedInUser);
//   // const author= competition.author;

//     let competitionsContent;

//     if (loading) {
//       competitionsContent = <Spinner />;
//     } else {
//       if (!(loggedInUser.competitions && loggedInUser.competitions.length > 0)) {
//         return (
//       <div className="marginContainer">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">User has no competition</div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//       competitionsContent = <CompetitionsFeed competitions={competitions} />;
//     }
//     return (
//       <div className="marginContainer">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">{competitionsContent}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// export default UserCompetitionDetail;

// UserCompetitionDetail.propTypes = {
//   getUserCompetitions: PropTypes.func.isRequired,
//   competition: PropTypes.object.isRequired
// };

// // const mapStateToProps = state => ({
// //   competition: state.comp
// // });

// /*
// TODO: 
//     1.fetch stanze by id utente!!
//     2.fatchare prenotazioni by id!! 
// */
// class UserCompetitionDetail extends Component {
//   state = {
//     modal: false,
//     user_id: "",
//     competition_user_id: "",
//   };

//   componentDidMount = () => {
//     this.setState({
//       user_id: this.props.auth.user._id,
//       competition_user_id: this.props.auth.user._id,
//     });

//     console.log(this.state);
//   };

//   //Tab
//   constructor(props) {
//     super(props);

//     this.state = {
//       selected: "Prenotazioni",
//     };
//   }

//   setSelected = (tab) => {
//     this.setState({ selected: tab });
//   };

//   //Modal
//   toggle = (id) => () => {
//     this.setState((prevState) => ({
//       modal: prevState.modal === id ? null : id,
//     }));
//   };

//   closeModal = () => {
//     this.setState({
//       modal: !this.state.modal,
//     });
//   };

//   render() {
//     const { horses } = this.props.horse;
//     const { eventNames } = this.props.eventName || {};

//     const { isAuth, user } = this.props.auth;

//     const DashUnauth = (
//       <>
//         <Card>
//           <div className="unauth-dashboard">
//             <h1>Questa è un'area riservata.</h1>
//             <Link className="btn-primary" to="/login">
//               Accedi
//             </Link>
//             <Link className="btn-primary" to="/register">
//               Registrati
//             </Link>
//           </div>
//         </Card>
//       </>
//     );

//     const DashBasic = (
//       <>
//         <div className="dash-cont">
//           {/* <img src={user} alt="profilo" className="user-img" /> */}
//           <div className="user-stuff">
//             <h1>Ciao </h1>
//             <h3>Bentornato nella tua dashboard.</h3>
//             <h3>
//               Da qui puoi accedere alla gestione delle tue prenotazioni e tante
//               altre funzionalità.
//             </h3>
//             <Button onClick={this.onClick}>Aggiorna ID</Button>
//           </div>
//         </div>

//         <div className="tab-cont">
//           <Card
//             tabs={["Prenotazioni", "Strutture Caricate"]}
//             selected={this.state.selected}
//             setSelected={this.setSelected}
//           >
//             <Card isSelected={this.state.selected === "Prenotazioni"}>
//               <Table hover>
//                 <thead>
//                   <tr>
//                     <th>Struttura</th>
//                     <th>Penalties</th>
//                     <th>CheckIn</th>
//                     <th>CheckOut</th>
//                     <th>Placing /notte</th>
//                   </tr>
//                 </thead>
//                 {eventNames.map(
//                   (_id, horse_name, penalties, date) => (
//                     <tbody>
//                       <tr key={_id}>
//                         <td>{horse_name} </td>
//                         <td>{penalties}</td>
//                         <td>{moment(date).format("DD/MM/YYYY")}</td>
//                         <td>Placing$</td>
//                       </tr>
//                     </tbody>
//                   )
//                 )}
//               </Table>
//             </Card>

//             <Card isSelected={this.state.selected === "Strutture Caricate"}>
//               <div className="tab-cont-button">
//                 <Button>
//                   {/* <Link to="/user-upgrade">Diventa Oste</Link> */}
//                 </Button>
//               </div>
//             </Card>
//           </Card>
//         </div>  
//       </>
//     );

//     const DashPlus = (
//       <>
//         <div className="dash-cont">
//           {/* <img src={user} alt="profilo" className="user-img" /> */}
//           <div className="user-stuff">
//             <h1>Ciao </h1>
//             <h3>Bentornato nella tua UserCompetitionDetailPlus.</h3>
//             <h3>
//               Da qui puoi accedere alla gestione delle tue prenotazioni, gestire
//               i tuoi annunci e tante altre funzionalità.
//             </h3>

//             <h1>Il tuo saldo: SPICCIULATO $</h1>
//           </div>
//         </div>

//         <div className="tab-cont">
//           <Card
//             tabs={["Prenotazioni", "Strutture Caricate", "Aggiungi Struttura"]}
//             selected={this.state.selected}
//             setSelected={this.setSelected}
//           >
//             <Card isSelected={this.state.selected === "Prenotazioni"}>
//               <Table hover>
//                 <thead>
//                   <tr>
//                     <th>Struttura</th>
//                     <th>Luogo</th>
//                     <th>CheckIn</th>
//                     <th>Placing /notte</th>
//                     <th>Totale</th>
//                   </tr>
//                 </thead>
//                 {eventNames.map(
//                   (_id, horse_name, penalties, date) => (
//                     <tbody>
//                       <tr key={_id}>
//                         <td>{horse_name} </td>
//                         <td>{penalties}</td>
//                         <td>{moment(date).format("DD/MM/YYYY")}</td>
                       
//                         <td>Placing$</td>
//                       </tr>
//                     </tbody>
//                   )
//                 )}
//               </Table>
//             </Card>

//             <Card isSelected={this.state.selected === "Strutture Caricate"}>
//               <Table hover>
//                 <thead>
//                   <tr>
//                     <th>Struttura</th>
//                     <th>Luogo</th>
//                     <th>Data Inserimento</th>
//                     <th>Placing /notte</th>
//                     <th>Numero Prenotazioni</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 {horses.map(({ _id, name, where, placing, uploaddate }) => (
//                   <tbody>
//                     <tr key={_id}>
//                       <td>{name}</td>
//                       <td>{where}</td>
//                       <td>{moment(uploaddate).format("DD/MM/YYYY")}</td>
//                       <td>{placing}$</td>
//                       <td>Prenotazioni</td>
//                       <td>
//                         <Button onClick={this.toggle(_id)}>&times;</Button>

//                         <Modal
//                           isOpen={this.state.modal === _id}
//                           toggle={this.toggle(_id)}
//                         >
//                           <ModalHeader>Elimina Struttura</ModalHeader>
//                           <ModalBody>
//                             Sei sicuro di voler eliminare questa struttura?
//                           </ModalBody>
                         
//                           <Button onClick={this.closeModal}>Annulla</Button>
//                         </Modal>
//                       </td>
//                     </tr>
//                   </tbody>
//                 ))}
//               </Table>
//             </Card>

//             <Card isSelected={this.state.selected === "Aggiungi Struttura"}>
//               <AddCompetition />
//             </Card>
//           </Card>
//         </div>
//       </>
//     );

//     return <>{isAuth ? (user.userPlus ? DashPlus : DashBasic) : DashUnauth}</>;
//   }
// }

// UserCompetitionDetail.propTypes = {
//   // getCompetitions: PropTypes.func.isRequired,
//   // getEventNames: PropTypes.func.isRequired,
//   horse: PropTypes.object.isRequired,
//   eventName: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   user_id: state.horse.user_id,
//   competition_user_id: state.eventName.competition_user_id,
//   auth: state.auth,
//   user: state.auth.user,
//   horse: state.horse,
//   eventName: state.eventName,
// });

// export default connect(mapStateToProps, {
//   // getCompetitions,
//   // setUserIDCompetitions,
  
  
//   // getEventNames,
//   // filterEventName,
// })(UserCompetitionDetail);

// export connect(
//   mapStateToProps,
//   { getUserCompetitions }
// )(UserCompetitionDetail);

//   return (
//     <div>
//     {loggedInUser}
//     {competitions.length ? (
//         <GridContainer>
//           {competitions.map(competition => (
//     <GridItem xs={12} sm={6} md={3} key={competition.id}>
      
//       <Card key={competition.id}>
//       <CardHeader color="warning">
//       <FontAwesomeIcon color="warning" icon={faStar} /> 
//       <p className={classes.cardCategory}>Competition</p>
//       <h3>{competition.eventName}</h3>
//       </CardHeader>
//         <h4> <FontAwesomeIcon icon={faHorse} /> {competition.horse} </h4>
//         <h4> <FontAwesomeIcon icon={faCalendar} /> {competition.date}  </h4>
//         <h4> <FontAwesomeIcon icon={faAward} /> {competition.placing}</h4>
//         <h4> <FontAwesomeIcon icon={faTimes} /> {competition.penalties}</h4>
//         <h4> <FontAwesomeIcon icon={faFlagCheckered} />  {competition.eventType}</h4>
//         <h4> <FontAwesomeIcon icon={faComments} /> <p> {competition.resultNotes} </p> </h4>
//           <h4> <FontAwesomeIcon icon={faComments} /> <p> {competition.createdBy} </p> </h4>
//       </Card>
//       </GridItem>
//          ))}
//       </GridContainer>
//        ) : (
//         <h3>No Results to Display</h3>
//         )}     
//     </div>
//   );
// }

// export default CompetitionDetail;