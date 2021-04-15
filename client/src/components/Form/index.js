import React, { useEffect, useState } from "react";
// import * as NumericInput from "./react-numeric-input";
// import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import API from "../../utils/API";

export function DateSelector(props) {
  return (
    <div className="form-group">
      {/* <DayPickerInput onDayChange={day => console.log(day)} id="day" input className="form-control" {...props} /> */}
    <input className="form-control" {...props} />
  </div>
   
  );
}
  
export function TextInput(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function SelectEvents(props) {
  return (
    <div className="form-group">
        Event Types:
        <select id="eventTypeOptions" className="form-control" {...props}>
          <option value="Dressage">Dressage</option>
          <option value="Horse Trials">Horse Trials</option>
          <option value="Showing">Showing</option>
          <option value="Show Jumping">Show Jumping</option> 
        </select>
      </div> 
  );
}

export function SelectHorse(props) {
const [competitions, setCompetitions] = useState([]);
const [competition, setCompetition] = useState([]);

// Load all competitions and store them with setCompetitions
  useEffect(() => {
  loadCompetitions()
  getCompetition()
}, [])

// Loads all competitions and sets them to competitions
function loadCompetitions() {
  API.getCompetitions()
    .then(res => 
    setCompetitions(res.data)
    )
    .catch(err => console.log(err));
    };

function getCompetition(id) {
  API.getCompetition(id)
  .then(res => 
  setCompetition(res.data)
  )
  .catch(err => console.log(err));
  };

return (   
  <div className="form-group">
    Horses:
  <select id="horseOptions" className="form-control" {...props}>
    {competitions.map(competition => (
      <option key={competition.horse}>
      {competition.horse}
       </option>
    ))}
  </select>
  </div> 

)};

export function SelectPlacing(props) {
  return (
    <div className="form-group">
       Placing (record to 10th, after that select NIL):
        <select id="selectPlacingOptions" className="form-control" {...props}>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="NIL">11th+</option>
        </select>
      </div> 
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}