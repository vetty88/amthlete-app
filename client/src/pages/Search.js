import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Form from "../components/Form";
import Competitions from "../components/Competitions";
import Nav from "../components/Nav";
// import Footer from "../components/Footer"

class CompetitionsCompetitions extends Component {
  //initial state
  state = {
    Competitions: "HRCAV",
    competitions: [],
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
    // once it clicks it connects to the google competition api with the Competitions value
    API.getEquestrianDBCompetitions(this.state.Competitions)
      .then((res) => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        } else {
          // store response in a array
          let results = res.data.items;
          //map through array
          results = results.map((result) => {
            //store each competition in a new object
            result = {
              key: result.id,
              id: result.id,
              eventName: result.volumeInfo.eventName,
              horse: result.volumeInfo.horses,
              resultNotes: result.volumeInfo.resultNotes,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink,
              buttonText: "Complete competition"
            };
            return result;
          });
          // reset state
          this.setState({ competitions: results, error: "" });
        }
      })
      .catch((err) => this.setState({ error: err.items }));
  };

  handlecompetitionsButton = (event) => {
    // console.log(event)
    event.preventDefault();
    console.log(this.state.competitions);
    console.log(event.target.id);
    let CompetitionsCompetitions = this.state.competitions.filter(
      (competition) => competition.id === event.target.id
    );
    CompetitionsCompetitions = CompetitionsCompetitions[0];
    console.log(CompetitionsCompetitions);
    API.CompleteCompetition(CompetitionsCompetitions)
      .then(this.setState({ competitions: this.state.competitions.map(competition=>{
        if (competition.id === event.target.id){
          return {
            ...competition, buttonText: "competitions!"
          }
        } else {
          return competition;
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
            competitions={this.state.competitions}
            handlecompetitionsButton={this.handlecompetitionsButton}
          />
        </Container>
        {/* <Footer/> */}
      </>
    );
  }
}

export default CompetitionsCompetitions;