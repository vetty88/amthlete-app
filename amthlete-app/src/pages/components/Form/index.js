import React from "react";
import "./style.css";

const Form = (props) => {
  return (
    <form>
      <div className="form-group row">
        <label className="competitionSearchLabel">
          <h2 className="searcheventName ml-5">Enter a competition eventName or horse Name</h2>
        </label>
      </div>
      <div className="form-group row">
        <input
          className="form-control mx-auto input"
          value={props.search}
          type="text"
          name="searchcompetition"
          placeholder="Pride & Prejudice"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group row col-sm-12 justify-content-end">
        <button
          type="submit"
          className="btn btn-light submitBtn mb-3 mr-2"
          onClick={props.handleFormSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;