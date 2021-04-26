import React, { useEffect, useState, Horseonent } from "react";
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import { Link, useParams } from "react-router-dom";
import { Col, Row} from "../components/Grid";
import Container from "@material-ui/core/Container";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";

function HorseDetail(props) {
  const [horses, setHorses] = useState([])
  const [formObject, setFormObject] = useState({})  
  const styles = {
    cardCategoryWhite: {
      "&,& a,& a:hover,& a:focus": {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      "& a,& a:hover,& a:focus": {
        color: "#FFFFFF"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      }
    }
  };
  
  // const useStyles = makeStyles(styles);
  //   const classes = useStyles();

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

  return (
  <div>
    <Row>
      <GridContainer>
        <Col size="md-12">
        {horses.length ? (
          <GridItem>
          {horses.map(horse => (
            <Card key={horse.id}>
              <h1>
                Horse: {horse.uniqueName}
                
              </h1>
              <h2>Year of Birth:  {horse.birthYear}</h2>
              <h3>Height: {horse.height}</h3>
              <h4>Breed: {horse.breed}</h4>
              <h4>Colour: {horse.colour}</h4>
           </Card>
        ))}
          </GridItem>
        ) : (
        <h3>No Results to Display</h3>
        )}
        </Col>
      </GridContainer>
    </Row>
  </div>
  );
}


export default HorseDetail;