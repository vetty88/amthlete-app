import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function competitions() {
  // Setting our component's initial state
  const [competitions, setcompetitions] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all competitions and store them with setcompetitions
  useEffect(() => {
    loadcompetitions()
  }, [])

  // Loads all competitions and sets them to competitions
  function loadcompetitions() {
    API.getcompetitions()
      .then(res => 
        setcompetitions(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a competition from the database with a given id, then reloads competitions from the db
  function deletecompetition(id) {
    API.deletecompetition(id)
      .then(res => loadcompetitions())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.Completecompetition method to Complete the competition data
  // Then reload competitions from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.eventName && formObject.horse) {
      API.Completecompetition({
        eventName: formObject.eventName,
        horse: formObject.horse,
        date: formObject.date
      })
        .then(res => loadcompetitions())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What competitions Should I Read?</h1>
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
              <FormBtn
                disabled={!(formObject.horse && formObject.eventName)}
                onClick={handleFormSubmit}
              >
                Submit competition
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>competitions On My List</h1>
            </Jumbotron>
            {competitions.length ? (
              <List>
                {competitions.map(competition => (
                  <ListItem key={competition._id}>
                    <Link to={"/competitions/" + competition._id}>
                      <strong>
                        {competition.eventName} by {competition.horse}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deletecompetition(competition._id)} />
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


export default competitions;
