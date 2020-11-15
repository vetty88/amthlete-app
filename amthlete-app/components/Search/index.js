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
                  alt={competition.title} 
                  className="img-fluid card-image mt-3"
                  />
                </div>
                <div className="col-sm-9">
                  <div className="card-body">
                    <h3 className="card-title">{competition.title}</h3>
                    <h4 className="card-text">Written by {competition.author}</h4>
                    <h6 className="card-text">{competition.description}</h6>
                    <a href={competition.link} target="_blank" rel="noopener noreferrer">
                    More details...
                    </a>
                  </div>
                </div>
                
                <button
                  className="savecompetition btn btn-light ml-auto mr-2"
                  id={competition.id} 
                  onClick={(event) => props.handleSavedButton(event)}
                > {competition.buttonText}
                </button>

                <a href="/saved">
                <button className="viewSavedBtn btn btn-light ml-auto mr-3">
                View Saved competitions
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