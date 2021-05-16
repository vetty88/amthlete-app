import { Col, Row} from "../../components/Grid";
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons'
import { faHorse } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import API from "../../utils/API.js";
import Card from "../../components/Card/Card.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import Container from "@material-ui/core/Container";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Moment from "react-moment";
import React, { useEffect, useState, Component } from "react";
import ReactDOM from 'react-dom';
import styles from "../../assets/jss/material-dashboard-react/views/rtlStyle.js";
import Warning from "@material-ui/icons/Warning";
import { connect } from "react-redux";
import CompetitionsFeed from "./CompetitionsFeed";
import Spinner from "../common/Spinner";
// import { getUserCompetitions } from "../../actions/competitionActions";
import moment from "moment";
import { Button, Table, Modal, ModalHeader, ModalBody } from "reactstrap";
// import {
//   setUserIDCompetitions,
// } from "../../actions/competitionActions";
// import { getCompetitions, filterCompetition } from ".././actions/competitionActions";
import PropTypes from "prop-types";
import AddCompetition from "../AddCompetition/AddCompetition";

// import profile from "../images/unnamed.png";

// const useStyles = makeStyles(styles);

// function  UserCompetitionDetail (props) { 
// const classes = useStyles();

//   const [competitions, setCompetitions, loading] = useState([]);
//   const [formObject, setFormObject] = useState({});

//   // Load all competitions and store them with setCompetitions
//   useEffect(() => {
//     loadCompetitions()
//   }, []);

//   // Loads all competitions and sets them to competitions
//   function loadCompetitions() {
//     API.getCompetitions()
//       .then(res => 
//         setCompetitions(res.data)
//       )
//       .catch(err => console.log(err));
//   };

// // router.get('/users/:id',(req,res) => {
// //      User.findById(req.params.id).populate('competitions').exec((err,foundUser)=>{
// //         if (err) {
// //             req.flash('error_msg',"Something went wrong");
// //             res.redirect('/');
// //         } else {
// //             Competition.find({'author.id':foundUser.id},(err,foundUser_competitions)=>{
// //                 res.render('users/show', {userProfile:foundUser, userCompetitions:foundUser_competitions});
// //             });
// //         }

// //     });
// // });

//     let competitionsContent;

//     if (loading) {
//       competitionsContent = <Spinner />;
//     } else {
//       if (!(competitions && competitions.length > 0)) {
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
//         <div className="container"
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

// const mapStateToProps = state => ({
//   competition: state.comp
// });

/*
TODO: 
    1.fetch stanze by id utente!!
    2.fatchare prenotazioni by id!! 
*/
class UserCompetitionDetail extends Component {
  state = {
    modal: false,
    user_id: "",
    competition_user_id: "",
  };

  componentDidMount = () => {
    this.setState({
      user_id: this.props.auth.user._id,
      competition_user_id: this.props.auth.user._id,
    });

    console.log(this.state);
  };

  //Tab
  constructor(props) {
    super(props);

    this.state = {
      selected: "Prenotazioni",
    };
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  };

  //Modal
  toggle = (id) => () => {
    this.setState((prevState) => ({
      modal: prevState.modal === id ? null : id,
    }));
  };

  closeModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const { horses } = this.props.horse;
    const { eventNames } = this.props.eventName || {};

    const { isAuth, user } = this.props.auth;

    const DashUnauth = (
      <>
        <Card>
          <div className="unauth-dashboard">
            <h1>Questa è un'area riservata.</h1>
            <Link className="btn-primary" to="/login">
              Accedi
            </Link>
            <Link className="btn-primary" to="/register">
              Registrati
            </Link>
          </div>
        </Card>
      </>
    );

    const DashBasic = (
      <>
        <div className="dash-cont">
          {/* <img src={profile} alt="profilo" className="profile-img" /> */}
          <div className="profile-stuff">
            <h1>Ciao </h1>
            <h3>Bentornato nella tua dashboard.</h3>
            <h3>
              Da qui puoi accedere alla gestione delle tue prenotazioni e tante
              altre funzionalità.
            </h3>
            <Button onClick={this.onClick}>Aggiorna ID</Button>
          </div>
        </div>

        <div className="tab-cont">
          <Card
            tabs={["Prenotazioni", "Strutture Caricate"]}
            selected={this.state.selected}
            setSelected={this.setSelected}
          >
            <Card isSelected={this.state.selected === "Prenotazioni"}>
              <Table hover>
                <thead>
                  <tr>
                    <th>Struttura</th>
                    <th>Penalties</th>
                    <th>CheckIn</th>
                    <th>CheckOut</th>
                    <th>Placing /notte</th>
                  </tr>
                </thead>
                {eventNames.map(
                  (_id, horse_name, penalties, date) => (
                    <tbody>
                      <tr key={_id}>
                        <td>{horse_name} </td>
                        <td>{penalties}</td>
                        <td>{moment(date).format("DD/MM/YYYY")}</td>
                        <td>Placing$</td>
                      </tr>
                    </tbody>
                  )
                )}
              </Table>
            </Card>

            <Card isSelected={this.state.selected === "Strutture Caricate"}>
              <div className="tab-cont-button">
                <Button>
                  {/* <Link to="/profile-upgrade">Diventa Oste</Link> */}
                </Button>
              </div>
            </Card>
          </Card>
        </div>  
      </>
    );

    const DashPlus = (
      <>
        <div className="dash-cont">
          {/* <img src={profile} alt="profilo" className="profile-img" /> */}
          <div className="profile-stuff">
            <h1>Ciao </h1>
            <h3>Bentornato nella tua UserCompetitionDetailPlus.</h3>
            <h3>
              Da qui puoi accedere alla gestione delle tue prenotazioni, gestire
              i tuoi annunci e tante altre funzionalità.
            </h3>

            <h1>Il tuo saldo: SPICCIULATO $</h1>
          </div>
        </div>

        <div className="tab-cont">
          <Card
            tabs={["Prenotazioni", "Strutture Caricate", "Aggiungi Struttura"]}
            selected={this.state.selected}
            setSelected={this.setSelected}
          >
            <Card isSelected={this.state.selected === "Prenotazioni"}>
              <Table hover>
                <thead>
                  <tr>
                    <th>Struttura</th>
                    <th>Luogo</th>
                    <th>CheckIn</th>
                    <th>Placing /notte</th>
                    <th>Totale</th>
                  </tr>
                </thead>
                {eventNames.map(
                  (_id, horse_name, penalties, date) => (
                    <tbody>
                      <tr key={_id}>
                        <td>{horse_name} </td>
                        <td>{penalties}</td>
                        <td>{moment(date).format("DD/MM/YYYY")}</td>
                       
                        <td>Placing$</td>
                      </tr>
                    </tbody>
                  )
                )}
              </Table>
            </Card>

            <Card isSelected={this.state.selected === "Strutture Caricate"}>
              <Table hover>
                <thead>
                  <tr>
                    <th>Struttura</th>
                    <th>Luogo</th>
                    <th>Data Inserimento</th>
                    <th>Placing /notte</th>
                    <th>Numero Prenotazioni</th>
                    <th></th>
                  </tr>
                </thead>
                {horses.map(({ _id, name, where, placing, uploaddate }) => (
                  <tbody>
                    <tr key={_id}>
                      <td>{name}</td>
                      <td>{where}</td>
                      <td>{moment(uploaddate).format("DD/MM/YYYY")}</td>
                      <td>{placing}$</td>
                      <td>Prenotazioni</td>
                      <td>
                        <Button onClick={this.toggle(_id)}>&times;</Button>

                        <Modal
                          isOpen={this.state.modal === _id}
                          toggle={this.toggle(_id)}
                        >
                          <ModalHeader>Elimina Struttura</ModalHeader>
                          <ModalBody>
                            Sei sicuro di voler eliminare questa struttura?
                          </ModalBody>
                         
                          <Button onClick={this.closeModal}>Annulla</Button>
                        </Modal>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </Card>

            <Card isSelected={this.state.selected === "Aggiungi Struttura"}>
              <AddCompetition />
            </Card>
          </Card>
        </div>
      </>
    );

    return <>{isAuth ? (user.userPlus ? DashPlus : DashBasic) : DashUnauth}</>;
  }
}

UserCompetitionDetail.propTypes = {
  // getCompetitions: PropTypes.func.isRequired,
  // getEventNames: PropTypes.func.isRequired,
  horse: PropTypes.object.isRequired,
  eventName: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user_id: state.horse.user_id,
  competition_user_id: state.eventName.competition_user_id,
  auth: state.auth,
  user: state.auth.user,
  horse: state.horse,
  eventName: state.eventName,
});

export default connect(mapStateToProps, {
  // getCompetitions,
  // setUserIDCompetitions,
  
  
  // getEventNames,
  // filterEventName,
})(UserCompetitionDetail);

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