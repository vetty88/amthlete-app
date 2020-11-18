import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Form from "../components/Form";
import Search from "../components/Search";
import Nav from "../components/Nav";
// import Footer from "../components/Footer"

class SearchCompetitions extends Component {
  //initial state
  state = {
    search: "Dressage Jackpot",
    competitions: [],
    error: "",
    message: "",
  };

  //function for Competitions bar
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  //function for submit button on Competitions form
  handleformSubmit = (event) => {
    event.preventDefault();
    // once it clicks it connects to the Equestrian competition api with the Competitions value
    API.getEquestrianDBCompetitions(this.state.search)
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
    let savedCompetitions = this.state.competitions.filter(
      (competition) => competition.id === event.target.id
    );
    savedCompetitions = savedCompetitions[0];
    console.log(savedCompetitions);
    API.saveCompetition(savedCompetitions)
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
          <Search
            competitions={this.state.competitions}
            handleSavedButton={this.handleSavedButton}
          />
        </Container>
        {/* <Footer/> */}
      </>
    );
  }
}

export default SearchCompetitions;