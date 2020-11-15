import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import Saved from "../components/Saved";
import Nav from "../components/Nav";

class Savecompetition extends Component {
  state = {
    savedcompetitions: [],
  };

  //get all competitions saved to the database
  componentDidMount() {
    API.getcompetitions()
      .then((res) => this.setState({ savedcompetitions: res.data }))
      .catch((err) => console.log(err));
  }

  //delete competition by id
  handleDeleteButton = (id) => {
    API.deletecompetition(id)
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
            savedcompetitions={this.state.savedcompetitions}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </>
    );
  }
}

export default Savecompetition;