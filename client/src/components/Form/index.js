import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";



export function DateSelector (props) 
{
  let [date, setDate] = useState(new Date()); 
  return (  
    <div className="form-group">
        Date:
        <div id="dateSelect" className="form-control" {...props}> 
          <DatePicker  showPopperArrow={false}  placeholderText="Select Date" selected={date} onChange={date => setDate(date)} />  
        </div>
    </div>  
  )  
  }      

export function Input(props) {
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
