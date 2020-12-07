
//client/components/Add.js
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');
class Add extends React.Component {
constructor() {
      super();
this.state = {
        eventTitle: '',
        eventType: '',
        horse: '',
        // date: '',
        messageFromServer: '',
        modalIsOpen: false
      }
this.handleSelectChange = this.handleSelectChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewCompetition = this.insertNewCompetition.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
closeModal() {
      this.setState({
        modalIsOpen: false,
        eventTitle: '',
        eventType: '',
        horse: 'Tess',
        // date: #,
        messageFromServer: ''
      });
    }
componentDidMount() {
      this.setState({
        horse: this.props.selectedHorse
      });
      // this.setState({
      //   date: this.props.selectedDate
      // });
    }
handleSelectChange(e) {
      if (e.target.name == 'horse') {
        this.setState({
          horse: e.target.value
        });
      // }
      // if (e.target.name == 'date') {
      //   this.setState({
      //     date: e.target.value
      //   });
      }
    }
onClick(e) {
      this.insertNewCompetition(this);
    }
insertNewCompetition(e) {
      axios.post('/insert',
        querystring.stringify({
          desc: e.state.eventTitle,
          eventType: e.state.eventType,
          horse: e.state.horse,
          // date: e.state.date
        }), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function(response) {
        e.setState({
          messageFromServer: response.data
        });
      });
    }
handleTextChange(e) {
      if (e.target.name == "eventTitle") {
        this.setState({
          eventTitle: e.target.value
        });
      }
if (e.target.name == "eventType") {
        this.setState({
          eventType: e.target.value
        });
      }
    }
render() {
   if(this.state.messageFromServer == ''){
      return (
        <div>
      <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Competition"
       className="Modal">
<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
       <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
      </Link><br/>
<fieldset>
       <label for="eventTitle">Event Title:</label><input type="text" id="eventTitle" name="eventTitle" value={this.state.eventTitle} onChange={this.handleTextChange}></input>
       <label for="eventType">Event Type:</label><input type="text" id="eventType" name="eventType" value={this.state.eventType} onChange={this.handleTextChange}></input>
       <label for="horse">Horse:</label><select id="horse" name="horse" value={this.state.horse} onChange={this.handleSelectChange}>
            <option value="Tess" id="Tess">Tess</option>
            <option value="Squirrel" id="Squirrel">Squirrel</option>
            <option value="Ardilla" id="Ardilla">Ardilla</option>
         </select>
       {/* <label for="date">Date:</label><select id="date" name="date" value={this.state.date} onChange={this.handleSelectChange}>
            {/* <option value="2016" id="16">2016</option> */}
            {/* <option value="#" id="#">#</option>
            <option value="#" id="#">#</option>
            <option value="#" id="#">#</option>
            <option value="#" id="20">#</option> */}
         {/* </select> */} 
      </fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New Competition</Button>
       </div>
          </Modal>
        </div>
      )
   }
   else{
    return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Add Competition"
        className="Modal">
<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>
        <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
         <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
        </Link>
       </div>
      </Modal>
       </div>
     )
    }
   }
}
export default Add;