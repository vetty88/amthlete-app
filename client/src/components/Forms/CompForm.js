import API from "../../utils/API";
import React, {useState, useEffect} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

export function DateSelector(props) {
  return (
   <div className="form-control" {...props}>
      <p>Please select a day:</p>
      <DayPickerInput />
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
             <p>Event Type:</p>
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
  const [horses, setHorses] = useState([])

   // Loads all horses and sets them to horses
  function loadHorses() {
    API.getHorses()
      .then(res => 
        setHorses(res.data)
      )
      .catch(err => console.log(err));
  };

      // Load all horses and store them with setHorses
  useEffect(() => {
    loadHorses()
  }, [])


  return (
    <div className="form-group">
         <p>Select Horse:</p>
      <select id="horseOptions" classname="form-control" {...props}>
        {horses.map((horse) => (
          <option value={horse.uniqueName}>{horse.uniqueName}</option>
      ))}
          </select>
        </div>
  );
}

export function SelectPlacing(props) {
  return (
    <div className="form-group">
         <p>Select Placing (1-10 /or 10+ = "NIL"):</p>
       
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