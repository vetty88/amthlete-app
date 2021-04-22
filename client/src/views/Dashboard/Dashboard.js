import React, {useEffect, useState} from "react";
import Moment from "react-moment";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
// @material-ui/core components
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid/";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { List, ListItem } from "../../components/List/List";
import API from "../../utils/API";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  // Setting our component's initial state
  const [competitions, setCompetitions] = useState([])
  const [competition, setCompetition] = useState([])

  // Load all competitions and store them with setCompetitions
  useEffect(() => {
    loadCompetitions()
    getCompetition()
  }, [])

  // Loads all competitions and sets them to competitions
  function loadCompetitions() {
    API.getCompetitions()
      .then(res => 
        setCompetitions(res.data)
      )
      .catch(err => console.log(err));
  };

  function getCompetition(id) {
    API.getCompetition(id)
    .then(res => 
      setCompetition(res.data)
    )
    .catch(err => console.log(err));
};

// Setting our component's initial state
  const [horses, setHorses] = useState([])
  const [horse, setHorse] = useState([])

  // Load all competitions and store them with setCompetitions
  useEffect(() => {
    loadHorses()
    getHorse()
  }, [])

  // Loads all competitions and sets them to competitions
  function loadHorses() {
    API.getHorses()
      .then(res => 
        setHorses(res.data)
      )
      .catch(err => console.log(err));
  };

  function getHorse(uniqueName) {
    API.getHorse(uniqueName)
    .then(res => 
      setHorse(res.data)
    )
    .catch(err => console.log(err));
};

// function avgEventType(competitions) {
//     return competitions.reduce((eventType) => (eventType)) / competitions.length;
// }

 
    return (
      <div>
        <GridContainer>

      <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Total Comps</p>
              <h3 className={classes.cardTitle}>
              {competitions.length} <small>competitions</small>
              </h3>
              <p className={classes.cardCategory}>Total Horses</p>
              <h3 className={classes.cardTitle}>
              {horses.length} <small>horses</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>

              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
                <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Horses</p>
         
              <h3 className={classes.cardTitle}></h3>
            </CardHeader>
            <CardBody>
          
            </CardBody>
            <CardFooter stats>
            {horses.length ? (
              <List>
            {horses.map(horse => (
                  <ListItem key={horse.uniqueName}>
                          {horse.uniqueName}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results</h3>
            )}
             
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Last 5: Competitions List</p>
              <h3 className={classes.cardTitle}></h3>
              </CardHeader>
            <CardFooter stats>
            {competitions.length ? (
              <List>
                {competitions.slice(0, 5).map(competition => (
                  <ListItem key={competition._id}>
                          {competition.eventName} with {competition.horse}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results</h3>
            )}
           </CardFooter>
          </Card>
        </GridItem>

        {/* <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Most POPULAR Event Type</p>
              <h3 className={classes.cardTitle}></h3>
              </CardHeader>
            <CardFooter stats>
            <h1> 
            {competition.avgeventType}
            </h1> 
           </CardFooter>
          </Card>
        </GridItem> */}
        
      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={10} md={10}>
                <Card>
                <CardHeader></CardHeader>
                    <CardBody>
                        <div id="chart">
                        <iframe styles="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="600" height="600" src="https://charts.mongodb.com/charts-project-0-ifizl/embed/charts?id=bdab3054-5ba1-47e5-b482-45e5e859c862&theme=light"></iframe>
                        </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </GridItem> 

            <GridItem xs={12} sm={10} md={10}>
                <Card>
                    <CardHeader></CardHeader>
                    <CardBody>
                        <div id="chart">
                        <iframe styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="800" height="600" src="https://charts.mongodb.com/charts-project-0-ifizl/embed/charts?id=d2f1e98d-9b13-4e08-9ce8-d01c7a8869f0&theme=light"></iframe> 
                        </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={10} md={10}>
                <Card>
                    <CardHeader></CardHeader>
                    <CardBody>
                        <div id="chart">
                        <iframe styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="800" height="600" src="https://charts.mongodb.com/charts-project-0-ifizl/embed/charts?id=ef7be6d4-9043-4ed2-90c4-ac8576aae118&theme=light"></iframe>
                        </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </GridItem> 
      </GridContainer>
      
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>

        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Competition Table</h4>
              <p className={classes.cardCategoryWhite}>
                Competition List (All Horses)
              </p>
            </CardHeader>
            <CardBody>
              <Table
                />
            </CardBody>
          </Card>
        </GridItem>
        
        </GridContainer>
    </div>
  );
}
