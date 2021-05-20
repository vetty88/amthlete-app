import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class CompetitionsItem extends Component {

  render() {
    const { competition, showActions } = this.props;

    return (
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-3 text-center m-auto px-0 py-3">
          </div>
          <div className="col-md-9 m-auto p-0">
            <div className="card-body m-2">
              <h2 className="card-title">
                {competition.eventName} - {competition.eventType}
              </h2>
              <div className="mx-2">
                <ul className="list-unstyled">
                  <li>
                    <b>Date Competitions:&nbsp;</b>
                    <Moment format="DD/MM/YYYY">{competition.date}</Moment>
                  </li>              
                </ul>
               
                {/* <Link to={`/competition/${competition._id}`} className="btn btn-info ml-auto">
                  View Details
                </Link>
                 <Link to={`/competition/${competition.author}`} className="btn btn-info ml-auto">
                  View Owner
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CompetitionsItem.defaultProps = {
  showActions: true
};

CompetitionsItem.propTypes = {
  competition: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
)(CompetitionsItem);