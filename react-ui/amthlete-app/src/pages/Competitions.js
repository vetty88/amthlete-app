import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/FormBtn";

function Competitions() {
  // Setting our component's initial state
  const [competitions, setcompetitions] = useState([])
  const [FormBtnObject, setFormBtnObject] = useState({})

  // Load all competitions and store them with setcompetitions
  useEffect(() => {
    loadCompetitions()
  }, [])

  // Loads all competitions and sets them to competitions
  function loadCompetitions() {
    API.getCompetitions()
      .then(res => 
        setcompetitions(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a competition from the database with a given id, then reloads competitions from the db
  function deleteCompetition(id) {
    API.deleteCompetition(id)
      .then(res => loadCompetitions())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormBtnObject({...FormBtnObject, [name]: value})
  };

  // When the FormBtn is submitted, use the API.CompleteCompetition method to Complete the competition data
  // Then reload competitions from the database
  function handleFormBtnSubmit(event) {
    event.preventDefault();
    if (FormBtnObject.eventName && FormBtnObject.horse) {
      API.CompleteCompetition({
        eventName: FormBtnObject.eventName,
        horse: FormBtnObject.horse,
        date: FormBtnObject.date
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
              <h1>What competitions Should I Enter?</h1>
            </Jumbotron>
            <FormBtn>
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
                disabled={!(FormBtnObject.horse && FormBtnObject.eventName)}
                onClick={handleFormBtnSubmit}
              >
                Submit competition
              </FormBtn>
            </FormBtn>
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
                    <DeleteBtn onClick={() => deleteCompetition(competition._id)} />
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