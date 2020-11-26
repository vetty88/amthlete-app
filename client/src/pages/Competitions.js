import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import DatePicker from "react-date-picker";
import { useField, splitFormProps } from "react-form";

function Competitions() {
  // Setting our component's initial state
  const [competitions, setCompetitions] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadCompetitions()
  }, [])

  // Loads all books and sets them to books
  function loadCompetitions() {
    API.getCompetitions()
      .then(res => 
        setCompetitions(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteCompetition(id) {
    API.deleteCompetition(id)
      .then(res => loadCompetitions())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveCompetition method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
  if (formObject.eventName && formObject.horse) {
      API.saveCompetition({
              eventName: formObject.eventName,
              eventType: formObject.eventType,
              horse: formObject.horse,
              disciplines: formObject.disciplines,
              penalties: formObject.penalties,
              place: formObject.place,
              images: formObject.images,
              resultNotes: formObject.resultNotes,
              date: formObject.date
          })
          .then(res => loadCompetitions())
          .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Competitions Should I Enter?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="eventName"
                placeholder="EventName (required)"
              />

          <label> 
              Event Type:
              <input
              type="choice"
              name="eventType"
              value={formObject.eventType}
              onChange={handleInputChange}
              />
              <select>
                  <option value="dressage">Dressage</option>
                  <option value="showJumping">Show Jumping</option>
                  <option value="showing">Showing</option>
                  <option value="horseTrials">Horse Trials</option>
                  <option value="combinedTraining">Combined Training</option> 
            </select>
           
            </label> 
     

             <Input
                onChange={handleInputChange}
                name="horse"
                placeholder="Horse (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="resultNotes"
                placeholder="ResultNotes (Optional)"
              />
              <FormBtn
                disabled={!(formObject.eventName && formObject.horse)}
                onClick={handleFormSubmit}
              >
                Submit Competition
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Competitions On My List</h1>
            </Jumbotron>
            {competitions.length ? (
              <List>
                {competitions.map(competition => (
                  <ListItem key={competition._id}>
                    <Link to={"/competitions/" + competition._id}>
                      <strong>
                        {competition.eventName} with {competition.horse}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteCompetition(competition._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
  // end Competitions function


export default Competitions;






// const Example = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//   );
// };

    
// function handleFormSubmit(event) {
//   event.preventDefault();
//   if (formObject.eventName && formObject.horse) {
//       API.saveCompetition({
//               eventName: formObject.eventName,
//               eventType: formObject.eventType,
//               horse: formObject.horse,
//               disciplines: formObject.disciplines,
//               penalties: formObject.penalties,
//               place: formObject.place,
//               images: formObject.images,
//               resultNotes: formObject.resultNotes,
//               date: formObject.date
//           })
//           .then(res => loadCompetitions())
//           .catch(err => console.log(err));
//   }
// };
// // save competition data function end

// function SelectField(props) {
//   const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

//   const {
//     value = "",
//     setValue,
//     meta: { error, isTouched }
//   } = useField(field, fieldOptions);

//   const handleSelectChange = e => {
//     setValue(e.target.value);
//   };

//   return (
//     <>
//       <select {...rest} value={value} onChange={handleSelectChange}>
//         <option disabled value="" />
//         {options.map(option => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>{" "}
//       {isTouched && error ? <em>{error}</em> : null}
//     </>
//   );
// }
//   // function SelectField end

//   function Competitions() {
//     // Setting our component's initial state
//     const [competitions, setCompetitions] = useState([])
//     const [formObject, setFormObject] = useState({})

//     // Load all competitions and store them with setCompetitions
//     useEffect(() => {
//         loadCompetitions()
//     }, [])

//     // Loads all competitions and sets them to competitions
//     function loadCompetitions() {
//         API.getCompetitions()
//             .then(res =>
//                 setCompetitions(res.data)
//             )
//             .catch(err => console.log(err));
//     };
//     // function load all competitions end

//     // Deletes a competition from the database with a given id, then reloads competitions from the db
//     function deleteCompetition(id) {
//         API.deleteCompetition(id)
//             .then(res => loadCompetitions())
//             .catch(err => console.log(err));
//     }
//     // delete competitions function end

//     // Handles updating component state when the user types into the input field
//     function handleInputChange(event) {
//         const {
//             name,
//             value
//         } = event.target;
//         setFormObject({
//             ...formObject,
//             [name]: value
//         })
//     };
//     // input change function end

//     // When the form is submitted, use the API.saveCompetition method to save the competition data
//     // Then reload competitions from the database
    

//     class NameForm extends React.Component {
//       constructor(props) {
//         super(props);
//         this.state = {value: ''};
    
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
    
//       handleChange(event) {
//         this.setState({value: event.target.value});
//       }
    
//       handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//       }

      
    
//       render() {
//         return (
          
//             {/* <label>
//               Name:
//               <input type="text" value={this.state.value} onChange={this.handleChange} />
//             </label>
//             <input type="submit" value="Submit" />
//           </form>
//         );
//       }
//     }


//    return (
//     <form onSubmit={handleSubmit}> */}
//       <Container fluid>
//         <Row>
//           <Col size = "md-6" >
//             <Jumbotron>
//               <h1>What Competitions Should I Enter?</h1> 
//             </Jumbotron> 

//             <form onSubmit={this.handleSubmit}></form>
                                
//               <Input 
//                 onChange={handleInputChange}
//                 name="eventName" 
//                 placeholder="EventName (required)" 
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="horse"
//                 placeholder="Horse (required)" 
//               />
            
//               <label> 
//                 Event Type: {" "} 
//                 <SelectField 
//                   field= "eventType"
//                   options= {["Dressage", "Show Jumping", "Showing", "Horse Trials", "Combined Training"]}
//                   validate = {value => (!value ? "This is required!" : false)}
//                 />
//               </label>
            
//               <Input
//                 onChange={handleInputChange}
//                 name="penalties"
//                 placeholder="penalties (optional)" 
//               />
              
//               <label> 
//                 Place: {" "} 
//                 <SelectField 
//                   field= "place"
//                   options= {["1st", "2nd", "3rd", "4th", "5th", "6th", "NIL"]}
//                 />
//               </label>

//               <Input onChange = {handleInputChange}
//                 name = "images" placeholder = "upload images (Optional)" />

//               <TextArea onChange = {handleInputChange}
//                 name = "resultNotes" placeholder = "ResultNotes (Optional)" />
        
           
//               <DatePicker />

//               </form>

//               <FormBtn onClick={() => handleFormSubmit} />
          
//             );

//             </Col>

//             <Col size="md-6 sm-12">
//               <Jumbotron>
//                 <h1>Competitions On My List</h1>
//               </Jumbotron>
//               {competitions.length ? (
//                 <List>
//                   {competitions.map(competition => (
//                     <ListItem key={competition._id}>
//                       <Link to={"/competitions/" + competition._id}>
//                         <strong>
//                           {competition.eventName} with {competition.horse}
//                         </strong>
//                       </Link>
//                       <DeleteBtn onClick={() => deleteCompetition(competition._id)} />
//                     </ListItem>
//                   ))}
//                 </List>
//               ) : (
//                 <h3>No Results to Display</h3>
//               )}
//         </Col>
//       </Row>
//     </Container>
    
//       );
    
//   }

  
// export default Competitions;