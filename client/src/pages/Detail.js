import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
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
                {competition.eventName} ({competition.eventType}) with {competition.horse}
                
              </h1>
              <h2>{competition.date}</h2>
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
