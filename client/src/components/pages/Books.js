import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, Form } from "../components/Form";

function Competitions() {
  // Setting our component's initial state
  const [Competitions, setCompetitions] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Competitions and store them with setCompetitions
  useEffect(() => {
    loadCompetitions()
  }, [])

  // Loads all Competitions and sets them to Competitions
  function loadCompetitions() {
    API.getCompetitions()
      .then(res => 
        setCompetitions(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a Competition from the database with a given id, then reloads Competitions from the db
  function deleteCompetition(id) {
    API.deleteCompetition(id)
      .then(res => loadCompetitions())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.CompleteCompetition method to Complete the Competition data
  // Then reload Competitions from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.eventName && formObject.horse) {
      API.CompleteCompetition({
        eventName: formObject.eventName,
        horse: formObject.horse,
        date: formObject.date
      })
        .then(res => loadCompetitions())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Competitions Should I Enter?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="eventName"
                placeholder="eventName (required)"
              />
              <Input
                onChange={handleInputChange}
                name="horse"
                placeholder="horse (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="date"
                placeholder="date (Optional)"
              />
              <Form
                disabled={!(formObject.horse && formObject.eventName)}
                onClick={handleFormSubmit}
              >
                Submit Competition
              </Form>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Competitions On My List</h1>
            </Jumbotron>
            {Competitions.length ? (
              <List>
                {Competitions.map(Competition => (
                  <ListItem key={Competition._id}>
                    <Link to={"/Competitions/" + Competition._id}>
                      <strong>
                        {Competition.eventName} by {Competition.horse}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteCompetition(Competition._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Competitions;
