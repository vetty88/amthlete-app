import React from "react";
import "./style.css";

const Saved = (props) => {
  return (
    <>
      <div className="searchContainer">
          {props.savedcompetitions.map((savedcompetition) => {
            return (
            <div className="card mb-3">
              <div className="row no-gutters" 
                   id={savedcompetition.title}
                  key={savedcompetition._id}>
                <div className="col-sm-3">
                <img 
                  key
                  src={savedcompetition.image} 
                  alt={savedcompetition.title} 
                  className="img-fluid card-image mt-3"
                  />
                </div>
                <div className="col-sm-9">
                  <div className="card-body">
                    <h3 className="card-title">{savedcompetition.title}</h3>
                    <h4 className="card-text">Author: {savedcompetition.author}</h4>
                    <h6 className="card-text">{savedcompetition.description}</h6>
                    <a href={savedcompetition.link} target="_blank" rel="noopener noreferrer">
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
                  id={savedcompetition._id}
                  onClick={() => props.handleDeleteButton(savedcompetition._id)}
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

export default Saved;