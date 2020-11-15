import React from "react";
import "./style.css";

const competitions = (props) => {
  return (
    <>
      <div className="searchContainer">
          {props.competitionscompetitions.map((competitionscompetition) => {
            return (
            <div className="card mb-3">
              <div className="row no-gutters" 
                   id={competitionscompetition.title}
                  key={competitionscompetition._id}>
                <div className="col-sm-3">
                <img 
                  key
                  src={competitionscompetition.image} 
                  alt={competitionscompetition.title} 
                  className="img-fluid card-image mt-3"
                  />
                </div>
                <div className="col-sm-9">
                  <div className="card-body">
                    <h3 className="card-title">{competitionscompetition.title}</h3>
                    <h4 className="card-text">Author: {competitionscompetition.author}</h4>
                    <h6 className="card-text">{competitionscompetition.description}</h6>
                    <a href={competitionscompetition.link} target="_blank" rel="noopener noreferrer">
                    More details...
                    </a>
                  </div>
                </div>

                <div className = "row btnRow">
                <a href="/">
                <button className="backToSearchBtn btn btn-light viewBtn ml-auto mr-2">
                    Back to Search Page
                  </button>
                </a>

                <button
                  className="savecompetition btn btn-light mr-3"
                  id={competitionscompetition._id}
                  onClick={() => props.handleDeleteButton(competitionscompetition._id)}
                >
                  Delete competition
                </button>
                </div>
                </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default competitions;