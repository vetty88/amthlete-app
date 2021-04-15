import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid/index";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [competition, setCompetition] = useState({})

  // When this component mounts, grab the competition with the _id of props.match.params.id
  // e.g. localhost:3000/competitions/599dcb67f0f16317844583fc
  const {id} = useParams()
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
                Event Name: {competition.eventName} with 
                Horse: {competition.horse}
                
              </h1>
              <h2>Date:   <Moment format="DD-MM-YYYY">{competition.date}</Moment></h2>
              <h3>Placing: {competition.placing}</h3>
              <h4>Penalties: {competition.penalties}</h4>
           
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              Event Type:
              <p>
                {competition.eventType}
              </p>
              Results:
              <p>
                {competition.resultNotes}
              </p>
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