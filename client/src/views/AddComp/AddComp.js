import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import DeleteBtn from "../../components/DeleteBtn";

import API from "../../utils/API";

// import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../../components/List";
import { Col, Row } from "../../components/Grid";
import { Input, DateSelector, SelectEvents, SelectHorse, SelectPlacing, TextArea, FormBtn } from "../../components/Form";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import AsyncCreatableSelect from 'react-select/async-creatable';

import { horses } from '../../data';
import { CreatableSelect } from '@atlaskit/select';

export default function Competitions() {
  interface State {
  inputValue: string;
}

class WithPromises extends Component<{}, State> {
  state = { inputValue: '' };

  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };
}

  const filterHorses = (inputValue: string) =>
  horses.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));

const promiseOptions = (inputValue: string) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterHorses(inputValue));
    }, 500);
  });
  // Setting our component's initial state
  const [competitions, setCompetitions] = useState([])
  const [formObject, setFormObject] = useState({})  
  const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
  };
  
  const useStyles = makeStyles(styles);
  

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
  const classes = useStyles();
  return (
  <div>
    <Row>
    <GridContainer>
    <Col size="md-12">
      <form>
      <Card>
      <CardHeader color="primary">
      <GridItem xs={12} sm={12} md={4}>
      <h4 className={classes.cardTitleWhite}>Add Competition</h4>
      <p className={classes.cardCategoryWhite}>Add a New Comp! </p>
      </GridItem>
      </CardHeader>
        <CardBody>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
        <Input
        labelText="Event Name"
        id="event-name"
        onChange={handleInputChange}
        name="eventName"
        placeholder="Event Name (required)"
        />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
        <SelectEvents 
        labelText="Competition Type (Discipline)"
        id="event-type"
        onChange = {handleInputChange}
        name = "eventType"
        placeholder = "EventType (required)"
        />  
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
        <CreatableSelect
          labelText="Horse, Select or Create New"
          id="horse" 
          cacheOptions defaultOptions loadOptions={promiseOptions} 
          name="horse"
          placeholder="Horse (required)" 
        />           
        </GridItem>
        </GridContainer>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
        <SelectPlacing
        labelText="Placing"
        id="placing"
        onChange={handleInputChange}
        name="placing"
        placeholder="Placing (required)"
        />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
        <Input
        labelText="Penalties"
        id="penalties"
        onChange={handleInputChange}
        name="penalties"
        placeholder="Penalties (required)"
        />
        </GridItem>
        </GridContainer>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
        <TextArea
        labelText="Result Notes"
        id="result-notes"
        onChange={handleInputChange}
        name="resultNotes"
        placeholder="Result Notes (Optional)"
        />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
        <DateSelector
        labelText="Date"
        id="comp-date"
        onChange={handleInputChange}
        name="date"
        placeholder="Comp Date YYYY-M-DD default time to 13:00 to save correct date"
        />
        </GridItem>
        </GridContainer>              
        </CardBody>
      <CardFooter>
      <FormBtn color="primary"
      disabled={!(formObject.horse && formObject.eventName)}
      onClick={handleFormSubmit}>
      Submit Competition
      </FormBtn>
      </CardFooter>
      </Card>
      </form> 
    </Col>

    <Col size="md-12">
      <GridItem xs={12} sm={12} md={6}>
      {competitions.length ? (
      <List>
      {competitions.map(competition => (
      <ListItem key={competition._id}>
      <Link to={"/competitions/" + competition._id}>
      <strong> {competition.eventName} with {competition.horse} </strong>
      </Link>
      <DeleteBtn onClick={() => deleteCompetition(competition._id)} />
      </ListItem>
      ))}
      </List>
      ) : (
      <h3>No Results to Display</h3>
      )}
      </GridItem>     

    </Col>
    </GridContainer>
    </Row>
  </div>
  );
}
