import React, { useState, useEffect, Horseonent } from "react";
import { Link } from "react-router-dom";
import { Button, Select, Input } from 'semantic-ui-react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";

import API from "../../utils/API";

// import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List/List";
import { Col, Row } from "../../components/Grid/index";
import { TextInput, FormBtn } from "../../components/Forms/HorseForm";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import AsyncCreatableSelect from 'react-select/async-creatable';
import { AsyncSelect } from '@atlaskit/select';

export default function Horses() {
  interface State {
  inputValue: string;
}

  // Setting our component's initial state
  const [horses, setHorses] = useState([])
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
  

  // Load all horses and store them with setHorses
  useEffect(() => {
    loadHorses()
  }, [])

  // Loads all horses and sets them to horses
  function loadHorses() {
    API.getHorses()
      .then(res => 
        setHorses(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a horse from the database with a given id, then reloads horses from the db
  function deleteHorse(uniqueName) {
    API.deleteHorse(uniqueName)
      .then(res => loadHorses())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveHorse method to save the horse data
  // Then reload horses from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.uniqueName && formObject.birthYear) {
      API.saveHorse({
        uniqueName: formObject.uniqueName,
        birthYear: formObject.birthYear,
        height: formObject.height,
        breed: formObject.breed,
        colour: formObject.colour,
      })
        .then(res => loadHorses())
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
            <GridItem xs={12} sm={12} md={12}>
              <h4 className={classes.cardTitleWhite}>Add Horse</h4>
              <p className={classes.cardCategoryWhite}>Add a New Horse! </p>
            </GridItem>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <TextInput labelText="Horse Name" id="horse-name" onChange={handleInputChange} name="uniqueName" placeholder="Horse Name (required)" />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextInput labelText="Horse's birth year (est)" id="birth-year" onChange={handleInputChange} name="birthYear" placeholder="BirthYear (required)" />
              </GridItem>
			        <GridItem xs={12} sm={12} md={6}>
              <TextInput labelText="Height (HH)" id="height" onChange={handleInputChange} name="height" placeholder="Height (required)" />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextInput labelText="Breed" id="breed" onChange={handleInputChange} name="breed" placeholder="Breed (required)" />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextInput labelText="Colour" id="colour" onChange={handleInputChange} name="colour" placeholder="Colour" />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <FormBtn color="primary" disabled={!(formObject.uniqueName && formObject.birthYear)} onClick={handleFormSubmit}>
              Submit Horse
            </FormBtn>
          </CardFooter>
        </Card>
      </form>
    </Col>


      <Col size="md-12">
      <GridItem xs={12} sm={12} md={12}>
      <h3>Horses</h3>
        {horses.length ? (
        <List>
          {horses.map(horse => (
          <ListItem key={horse.uniqueName}>
            <Link to={"/horses/" + horse.uniqueName}>
            <strong> {horse.uniqueName} </strong>
            </Link>
            <DeleteBtn onClick={()=> deleteHorse(horse.uniqueName)} />
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