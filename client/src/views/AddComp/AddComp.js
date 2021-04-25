import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {  Button, Select, Input } from 'semantic-ui-react'
import {  Col,  Row } from "../../components/Grid/index";
import {  Link  } from "react-router-dom";
import {  List, ListItem  } from "../../components/List/List";
import {  makeStyles } from "@material-ui/core/styles";
import {  TextInput,  DateSelector, SelectEvents, SelectHorse, SelectPlacing, TextArea, FormBtn   } from "../../components/Forms/CompForm";
import { AsyncSelect  } from '@atlaskit/select';
import API from "../../utils/API";
import AsyncCreatableSelect from 'react-select/async-creatable';
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardHeader from "../../components/Card/CardHeader.js";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import moment from "moment";
import React, { useState, useEffect } from "react";

export default function Competitions() {
  // interface State { inputValue: string; }


  // Setting our component's initial state
  const [competitions, setCompetitions] = useState([]);
  const [formObject, setFormObject] = useState({});
  // date = moment.utc( date );

  // (new Date("2000-02-14T00:00:00.000Z")).toString()

  
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
  }, []);

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
    setFormObject({ ...formObject,  [name]: value })
  };

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
          date: new Date (formObject.date),
        })
        .then(res => loadCompetitions())
        .catch(err => console.log(err));
    }
  };
  const classes = useStyles();

    // const [value, onChange] = useState(new Date());
  
    // const onDateChange=(newDate)=>{
    //  //Your custom code here
    //  props.handleOnclick(newDate);
    //  onChange(newDate);
    // };

    var curr = new Date();
curr.setDate(curr.getDate()+1);
var thisDate = curr.toISOString().substr(0,10);

// curr.setDate(curr.getDate() + 3);
// var thisDate = curr.toISOString().substr(0,10);
  

  return (
  <div>
    <Row>
    <GridContainer>
      <Col size="md-12">
      <form>
        <Card>
          <CardHeader color="primary">
            <GridItem xs={12} sm={12} md={12}>
              <h4 className={classes.cardTitleWhite}>Add Competition</h4>
              <p className={classes.cardCategoryWhite}>Add a New Comp! </p>
            </GridItem>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
              Event Name
                <TextInput label="Event Name" id="event-name" defaultValue="" onChange={handleInputChange} name="eventName" placeholder="Event Name (required)"  />
              </GridItem>
             
              <GridItem xs={12} sm={12} md={6}>
              Event Date
                <DateSelector label="Competition Date" id="comp-date" type="date" defaultValue={thisDate} onClick={handleInputChange}   name="date" placeholder="Comp Date" />
                
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
               Event Type (Discipline)
                <SelectEvents label="Competition Type (Discipline)" id="event-type" onChange={handleInputChange} name="eventType" placeholder="EventType (required)" />
              </GridItem>
              
              <GridItem xs={12} sm={12} md={6}>
              Horse
                <SelectHorse onChange={handleInputChange} name="horse" />
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
              Placing
                <SelectPlacing pattern="[0-10]*" label="Placing" id="placing" onChange={handleInputChange} name="placing" placeholder="Placing (required)" />
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
              Penalties
                <TextInput pattern="[0-200]*" label="Penalties" id="penalties" onChange={handleInputChange} name="penalties" placeholder="Penalties (required)" />
              </GridItem>
 
              <GridItem xs={12} sm={12} md={8}>
              Result Notes
                <TextArea label="Result Notes" id="result-notes" onChange={handleInputChange} name="resultNotes" placeholder="Result Notes (Optional)" />
              </GridItem>
              
            </GridContainer>
          </CardBody>
          <CardFooter>
            <FormBtn color="primary" disabled={!(formObject.eventName && formObject.placing)} onClick={handleFormSubmit}>
              Submit Competition
            </FormBtn>
          </CardFooter>
        </Card>
      </form>
      </Col>

      <Col size="md-12">
      <GridItem xs={12} sm={12} md={12}>
        <h3>Competitions</h3>
        {competitions.length ? (
        <List>
          {competitions.map(competition => (
          <ListItem key={competition._id}>
            <Link to={"/competitions/" + competition._id}>
            <strong> {competition.eventName} with {competition.horse} </strong>
            </Link>
            <DeleteBtn onClick={()=> deleteCompetition(competition._id)} />
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