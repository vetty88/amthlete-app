import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Moment from "react-moment";


function Detail(props) {
  let [competition, setCompetition] = useState({})

  // When this component mounts, grab the competition with the id of props.match.params.id
  // e.g. localhost:3000/competitions/599dcb67f0f16317844583fc
  let id = useParams()
  useEffect(() => {
    API.getCompetition(id)
      .then(res => setCompetition(res.data))
      .catch(err => console.log(err));
  }, [])
 

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {competition.eventName} with {competition.horse}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1> Event Details </h1>
              <h2> Event:  {competition.eventName} </h2>
              <h3> Date:  <Moment format="DD/MM/YYYY">{competition.date}</Moment> </h3>
              <h4> Type:  {competition.eventType} </h4>
              <p> Horse:  {competition.horse} </p>
              <p> Penalties:  {competition.penalties} </p>
              <p> Placing:  {competition.place} </p>
              <p> Notes:  {competition.resultNotes} </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Horses</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;