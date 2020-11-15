import React, { Component } from "react";
import API from "./src/pages/utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Form from "../components/Form";
import Competitions from "../components/Competitions";
import Nav from "../components/Nav";
// import Footer from "../components/Footer"

class CompetitionsCompetitions extends Component {
  //initial state
  state = {
    Competitions: "Pride & Prejudice",
    Competitions: [],
    error: "",
    message: "",
  };

  //function for Competitions bar
  handleInputChange = (event) => {
    this.setState({ Competitions: event.target.value });
  };

  //function for submit button on Competitions form
  handleFormSubmit = (event) => {
    event.preventDefault();
    // once it clicks it connects to the google Competition api with the Competitions value
    API.getEquestrianDBCompetitions(this.state.Competitions)
      .then((res) => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        } else {
          // store response in a array
          let results = res.data.items;
          //map through array
          results = results.map((result) => {
            //store each Competition in a new object
            result = {
              key: result.id,
              id: result.id,
              eventName: result.volumeInfo.eventName,
              horse: result.volumeInfo.horses,
              resultNotes: result.volumeInfo.resultNotes,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink,
              buttonText: "Complete Competition"
            };
            return result;
          });
          // reset state
          this.setState({ Competitions: results, error: "" });
        }
      })
      .catch((err) => this.setState({ error: err.items }));
  };

  handleCompletedButton = (event) => {
    // console.log(event)
    event.preventDefault();
    console.log(this.state.Competitions);
    console.log(event.target.id);
    let CompletedCompetitions = this.state.Competitions.filter(
      (Competition) => Competition.id === event.target.id
    );
    CompletedCompetitions = CompletedCompetitions[0];
    console.log(CompletedCompetitions);
    API.CompleteCompetition(CompletedCompetitions)
      .then(this.setState({ Competitions: this.state.Competitions.map(Competition=>{
        if (Competition.id === event.target.id){
          return {
            ...Competition, buttonText: "Completed!"
          }
        } else {
          return Competition;
        }
      })
     }))
      .catch((err) => console.log("ERROR", err));
  };
  render() {
    return (
      <>
      <Nav/>
        <Jumbotron/>
        <Container>
          <Row>
            <Col size="12">
              <Form
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <Competitions
            Competitions={this.state.Competitions}
            handleCompletedButton={this.handleCompletedButton}
          />
        </Container>
        {/* <Footer/> */}
      </>
    );
  }
}

export default CompetitionsCompetitions;