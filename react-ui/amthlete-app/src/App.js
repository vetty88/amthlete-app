import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { CompetitionList, CompetitionListItem } from "./components/CompetitionList";
import { Container, Row, Col } from "./components/Grid";

function App() {

  const [Competitions, setCompetitions] = useState([]);
  const [CompetitionSearch, setCompetitionSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setCompetitionSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get Competitions update the Competitions state
    event.preventDefault();
    API.getCompetitions(CompetitionSearch)
      .then(res => setCompetitions(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="CompetitionSearch"
                      value={CompetitionSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Competition"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!Competitions.length ? (
              <h1 className="text-center">No Competitions to Display</h1>
            ) : (
              <CompetitionList>
                {Competitions.map(Competition => {
                  return (
                    <CompetitionListItem
                      key={Competition.title}
                      title={Competition.title}
                      href={Competition.href}
                      eventNames={Competition.eventNames}
                      thumbnail={Competition.thumbnail}
                    />
                  );
                })}
              </CompetitionList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
