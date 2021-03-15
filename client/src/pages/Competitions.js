import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';


const eventTypeOptions = [{
  value: 'dressage',
  label: 'Dressage'
},
{
  value: 'showJumping',
  label: 'Show Jumping'
},
{
  value: 'showing',
  label: 'Showing'
},
{
  value: 'horseTrials',
  label: 'Horse Trials'
},
{
  value: 'combinedTraining',
  label: 'Combined Training'
}
];

function Competitions() {
  // Setting our component's initial state
  const [competitions, setCompetitions] = useState([])
  const [formObject, setFormObject] = useState({})
  const [startDate, setStartDate] = useState(new Date());

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

  // Deletes a book from the database with a given id, then reloads competitions from the db
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

  // When the form is submitted, use the API.saveCompetition method to save the book data
  // Then reload competitions from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.eventName && formObject.horse) {
      API.saveCompetition({
          eventName: formObject.eventName,
          eventType: formObject.eventType,
          horse: formObject.horse,
          penalties: formObject.penalties,
          images: formObject.images,
          _resultNotes: formObject.resultNotes,
          get resultNotes() {
            return this._resultNotes;
          },
          set resultNotes(value) {
            this._resultNotes = value;
          },
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
                placeholder="EventName (required)"
              />

              <Select 
                onClick = {handleInputChange}
                name = "eventType"
                placeholder = "EventType (required)"
                options = {eventTypeOptions}
              />
              <Input
                onChange={handleInputChange}
                name="horse"
                placeholder="Horse (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="resultNotes"
                placeholder="Result Notes (Optional)"
              />
              <DatePicker
                dateFormat="dd/mm/yyyy"
                selected= {startDate}
                onChange = {date => setStartDate(date)}
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