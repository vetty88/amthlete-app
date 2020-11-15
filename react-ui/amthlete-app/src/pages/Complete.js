import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import competitions from "../components/competitions";
import Nav from "../components/Nav";

class CompleteCompetition extends Component {
  state = {
    CompetitionsCompetitions: [],
  };

  //get all competitions competitions to the database
  componentDidMount() {
    API.getCompetitions()
      .then((res) => this.setState({ CompetitionsCompetitions: res.data }))
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
          <competitions
            CompetitionsCompetitions={this.state.CompetitionsCompetitions}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </>
    );
  }
}

export default CompleteCompetition;