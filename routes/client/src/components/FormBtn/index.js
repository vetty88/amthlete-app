import React from "react";
import "./style.css";

const FormBtn = (props) => {
  return (
    <FormBtn>
      <div className="FormBtn-group row">
        <label className="competitionCompetitionsLabel">
          <h2 className="CompetitionseventName ml-5">Enter a competition eventName or horse Name</h2>
        </label>
      </div>
      <div className="FormBtn-group row">
        <input
          className="FormBtn-control mx-auto input"
          value={props.Competitions}
          type="text"
          name="Competitionscompetition"
          placeholder="Dressage Jackpot"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="FormBtn-group row col-sm-12 justify-content-end">
        <button
          type="submit"
          className="btn btn-light submitBtn mb-3 mr-2"
          onClick={props.handleFormBtnSubmit}
        >
          Competitions
        </button>
      </div>
    </FormBtn>
  );
};

export default FormBtn;