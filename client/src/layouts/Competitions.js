import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, DateSelector, SelectEvents, SelectHorse, TextArea, FormBtn } from "../components/Form";
import "react-modern-calendar-datepicker/lib/DatePicker.css";



function Competitions() {
  // Setting our component's initial state
  const [competitions, setCompetitions] = useState([])
  const [formObject, setFormObject] = useState({})  

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

  // Deletes a competition from the database with a given id, then reloads competitions from the db
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

  // When the form is submitted, use the API.saveCompetition method to save the competition data
  // Then reload competitions from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.eventName && formObject.horse) {
      API.saveCompetition({
        eventName: formObject.eventName,
        horse: formObject.horse,
        eventType: formObject.eventType,
        placing: formObject.placing,
        penalties: formObject.penalties,
        resultNotes: formObject.resultNotes,
        date: new Date(formObject.date),
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
                placeholder="EventName (required)"
              />      
             <SelectEvents 
                onChange = {handleInputChange}
                name = "eventType"
                placeholder = "EventType (required)"
              />

              <SelectHorse
                onChange={handleInputChange}
                name="horse"
                placeholder="Horse (required)"
              />

              <Input
                onChange={handleInputChange}
                name="placing"
                placeholder="Placing (required)"
              />

              <Input
                onChange={handleInputChange}
                name="penalties"
                placeholder="Penalties (required)"
              />
              
              <TextArea
                onChange={handleInputChange}
                name="resultNotes"
                placeholder="Result Notes (Optional)"
                
              />
    
              <DateSelector
                onChange={handleInputChange}
                name="date"
                placeholder="Comp Date Enter as YYYY-M-DD, default time to 13:00 to save correct date"
              />

              <FormBtn
                disabled={!(formObject.horse && formObject.eventName)}
                onClick={handleFormSubmit}
              >
                Submit Competition
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Competitions On My List</h1>
            </Jumbotron>
            {competitions.length ? (
              <List>
                {competitions.map(competition => (
                  <ListItem key={competition._id}>
                    <Link to={"/competitions/" + competition._id}>
                      <strong>
                        {competition.eventName} with {competition.horse}
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
