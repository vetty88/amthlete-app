import API from "../../utils/API";
import React, {useState, Component, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';

export function DateSelector(props) {
const [startDate, setStartDate] = useState(new Date());
  const handleChange = value => {
    setStartDate(value);
  };
   return (
   <div className="form-group">
    <DatePicker className="form-control" {...props} 
      selected={startDate}
      onChange={handleChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={60}
      timeCaption="time"
      dateFormat="MMMM eeee d, yyyy h:mm aa"
      
    />
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
      <select id="horseOptions" className="form-control" {...props}>
        {horses.map((horse) => (
          <option key={horse._id} value={horse.uniqueName}>{horse.uniqueName}</option>
      ))}
          </select>
        </div>
  );
}

export function SelectPlacing(props) {
  return (
    <div className="form-group">
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
          <option value="0">11th+</option>
        </select>
      </div> 
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="8" {...props} />
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