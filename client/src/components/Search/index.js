import React from "react";
import "./style.css";

const Search = (props) => {
  return (
    <>
      <div className="searchContainer">
        {props.competitions.map((competition) => {
          return (
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-sm-3">
                  <img 
                  key
                  src={competition.image} 
                  alt={competition.eventName} 
                  className="img-fluid card-image mt-3"
                  />
                </div>
                <div className="col-sm-9">
                  <div className="card-body">
                    <h3 className="card-eventName">{competition.eventName}</h3>
                    <h4 className="card-text">Written by {competition.horse}</h4>
                    <h6 className="card-text">{competition.resultNotes}</h6>
                    <a href={competition.link} target="_blank" rel="noopener noreferrer">
                    More details...
                    </a>
                  </div>
                </div>
                
                <button
                  className="saveCompetition btn btn-light ml-auto mr-2"
                  id={competition.id} 
                  onClick={(event) => props.handleSavedButton(event)}
                > {competition.buttonText}
                </button>

                <a href="/saved">
                <button className="viewSavedBtn btn btn-light ml-auto mr-3">
                View Saved Competitions
                </button>
                </a>

              </div>
            </div>
            
          );
        })}
      </div>
    </>
  );
};
export default Search;