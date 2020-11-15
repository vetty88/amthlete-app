import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import Completed from "../components/Completed";
import Nav from "../components/Nav";

class CompleteCompetition extends Component {
  state = {
    CompletedCompetitions: [],
  };

  //get all Competitions Completed to the database
  componentDidMount() {
    API.getCompetitions()
      .then((res) => this.setState({ CompletedCompetitions: res.data }))
      .catch((err) => console.log(err));
  }

  //delete Competition by id
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
          <Completed
            CompletedCompetitions={this.state.CompletedCompetitions}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </>
    );
  }
}

export default CompleteCompetition;