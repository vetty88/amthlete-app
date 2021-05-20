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

const useStyles = makeStyles(styles);

function CompetitionDetail(props) {
  const classes = useStyles();

  const [competitions, setCompetitions] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all competitions and store them with setCompetitions
  useEffect(() => {
    loadCompetitions()
  }, []);

  // Loads all competitions and sets them to competitions
  function loadCompetitions() {
    API.getCompetitions()
      .then(res => 
        setCompetitions(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div>
    {competitions.length ? (
        <GridContainer>
          {competitions.map(competition => (
    <GridItem xs={12} sm={6} md={3} key={competition.id}>
      
      <Card key={competition.id}>
      <CardHeader color="warning">
      <FontAwesomeIcon color="warning" icon={faStar} /> 
      <p className={classes.cardCategory}>Competition</p>
      <h3>{competition.eventName}</h3>
      </CardHeader>
        <h4> <FontAwesomeIcon icon={faHorse} /> {competition.horse} </h4>
        <h4> <FontAwesomeIcon icon={faCalendar} /> {competition.date.substring(0, 10)}  </h4>
        <h4> <FontAwesomeIcon icon={faAward} /> {competition.placing}</h4>
        <h4> <FontAwesomeIcon icon={faTimes} /> {competition.penalties}</h4>
        <h4> <FontAwesomeIcon icon={faFlagCheckered} />  {competition.eventType}</h4>
        <h4> <FontAwesomeIcon icon={faComments} /> <p> {competition.resultNotes} </p> </h4>
      </Card>
      </GridItem>
         ))}
      </GridContainer>
       ) : (
        <h3>No Results to Display</h3>
        )}     
    </div>
  );
}

export default CompetitionDetail;