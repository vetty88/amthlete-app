import React, { useEffect, useState, Component } from "react";
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import { Link, useParams } from "react-router-dom";
import { Col, Row} from "../components/Grid";
import Container from "@material-ui/core/Container";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";

function CompDetail(props) {
  const [competitions, setCompetitions] = useState([])
  const [formObject, setFormObject] = useState({})  
  const styles = {
    cardCategoryWhite: {
      "&,& a,& a:hover,& a:focus": {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      "& a,& a:hover,& a:focus": {
        color: "#FFFFFF"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      }
    }
  };
  
  // const useStyles = makeStyles(styles);
  //   const classes = useStyles();

  // Load all competitions and store them with setCompetitions
  useEffect(() => {
    loadCompetitions()
  }, [])

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
    <Row>
      <GridContainer>
        <Col size="md-12">
        {competitions.length ? (
          <GridItem>
          {competitions.map(competition => (
            <Card key={competition.id}>
              <h1> Event Name: {competition.eventName} with Horse: {competition.horse} </h1>
              <h2>Date: {competition.date}</h2>
              <h3>Placing: {competition.placing}</h3>
              <h4>Penalties: {competition.penalties}</h4>
              <p> Event Type: {competition.eventType}</p>
              <p> Results: {competition.resultNotes} </p>
            </Card>
        ))}
          </GridItem>
        ) : (
        <h3>No Results to Display</h3>
        )}
        </Col>
      </GridContainer>
    </Row>
  </div>
  );
}


export default CompDetail;