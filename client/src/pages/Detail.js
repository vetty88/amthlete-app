import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [competition, setCompetition] = useState({})

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
                {competition.eventName} with {competition.horse}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
	<h1>ResultNotes</h1>
		<p>
		  {competition.eventName}
      </p>
    <p>
      {competition.eventType}
      </p>
    <p>
      {competition.horse}
      </p>
    <p>
      {competition.penalties}
      </p>
    <p>
      {competition.place}
      </p>
    <p>
      {competition.images}
      </p>
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