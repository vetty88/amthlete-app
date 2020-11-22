import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import Saved from "../components/Saved";
import Nav from "../components/Nav";

class SaveCompetition extends Component {
  state = {
    savedCompetitions: [],
  };

  //get all competitions saved to the database
  componentDidMount() {
    API.getCompetitions()
      .then((res) => this.setState({ savedCompetitions: res.data }))
      .catch((err) => console.log(err));
  }

  //delete competition by id
  handleDeleteButton = (id) => {
    API.deleteCompetition(id)
      .then((res) => this.componentDidMount())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
      <Nav/>
        <Jumbotron/>

        <Container>
          <Saved
            savedCompetitions={this.state.savedCompetitions}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </>
    );
  }
}

export default SaveCompetition;