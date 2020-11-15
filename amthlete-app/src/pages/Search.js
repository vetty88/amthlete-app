import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col } from "./components/Grid";
import Form from "./components/Form";
import Search from "./components/Search";
import Nav from "./components/Nav";
// import Footer from "../components/Footer"

class Searchcompetitions extends Component {
  //initial state
  state = {
    search: "Pride & Prejudice",
    competitions: [],
    error: "",
    message: "",
  };

  //function for search bar
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  //function for submit button on search form
  handleFormSubmit = (event) => {
    event.preventDefault();
    // once it clicks it connects to the google competition api with the search value
    API.getGoogleSearchcompetitions(this.state.search)
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
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink,
              buttonText: "Save competition"
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
    let competitionscompetitions = this.state.competitions.filter(
      (competition) => competition.id === event.target.id
    );
    competitionscompetitions = competitionscompetitions[0];
    console.log(competitionscompetitions);
    API.savecompetition(competitionscompetitions)
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
            handlecompetitionsButton={this.handlecompetitionsButton}
          />
        </Container>
        {/* <Footer/> */}
      </>
    );
  }
}

export default Searchcompetitions;