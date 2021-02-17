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

const eventTypeOptions = [
  { value: 'dressage', label: 'Dressage' }, 
  { value:'showJumping', label: 'Show Jumping' },
  { value: 'showing', label: 'Showing' },
  { value: 'horseTrials', label: 'Horse Trials' }, 
  { value: 'combinedTraining', label: 'Combined Training' }
];


function Competitions() {
  // Setting our component's initial state
  const [competitions, setCompetitions] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  // Load all books and store them with setBooks
  useEffect(() => {
    loadCompetitions();
  }, []);

  // Loads all books and sets them to books
  function loadCompetitions() {
    API.getCompetitions()
      .then(res => 
        setCompetitions(res.data)
      )
      .catch(err => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteCompetition(id) {
    API.deleteCompetition(id)
      .then(res => loadCompetitions())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value});
  }

  // When the form is submitted, use the API.saveCompetition method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
  if (formObject.eventName && formObject.horse) {
      API.saveCompetition({
              eventName: formObject.eventName,
              eventType: formObject.eventType,
              horse: formObject.horse,
              penalties: formObject.penalties,
              place: formObject.place,
              images: formObject.images,
              resultNotes: formObject.resultNotes,
              startDate: formObject.date
          })
          .then(res => loadCompetitions())
          .catch(err => console.log(err));
    }
  }

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

            Event Type:
            <Select 
             onClick={handleInputChange}
             name="eventType"
             placeholder="EventType (required)"
              options={eventTypeOptions} />
   
             <Input
                onChange={handleInputChange}
                name="horse"
                placeholder="Horse (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="resultNotes"
                placeholder="ResultNotes (Optional)"
              />

              <DatePicker selected= {startDate} onChange={date => setStartDate (date)} />
                    
              <FormBtn
                disabled={!(formObject.eventName && formObject.horse)}
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
  // end Competitions function


export default Competitions;