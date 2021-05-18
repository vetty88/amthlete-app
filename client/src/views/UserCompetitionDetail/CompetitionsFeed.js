import React, { Component } from "react";
import PropTypes from "prop-types";
import CompetitionsItem from "./CompetitionsItem";

class CompetitionsFeed extends Component {
  render() {
    const { competition, competitions } = this.props;
    const loggedInUser = localStorage.getItem('loggedIn');

    return competitions.map(competition => <CompetitionsItem key={competition.id} competition= {competition} />);
  }
}

CompetitionsFeed.propTypes = {
  competition: PropTypes.object.isRequired,
  competitions: PropTypes.array.isRequired
};

export default CompetitionsFeed;