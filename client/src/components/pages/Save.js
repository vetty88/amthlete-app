import React, { Component } from "react";
import API from "../../pages/utils/API";
import Jumbotron from "../Jumbotron";
import { Container } from "../Grid";
import Completed from "../Completed";
import Nav from "../Nav";

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