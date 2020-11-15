import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import competitions from "../components/competitions";
import Nav from "../components/Nav";

class Completecompetition extends Component {
  state = {
    competitionscompetitions: [],
  };

  //get all competitions competitions to the database
  componentDidMount() {
    API.getcompetitions()
      .then((res) => this.setState({ competitionscompetitions: res.data }))
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
          <competitions
            competitionscompetitions={this.state.competitionscompetitions}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </>
    );
  }
}

export default Completecompetition;