import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
var querystring = require('querystring');

class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      eventName: '',
      eventType: '',
      horse: '',
      messageFromServer: '',
      modalIsOpen: false
    };
this.update = this.update.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
}
componentDidMount() {
    this.setState({
      id: this.props.eventName._id,
      eventName: this.props.eventName.eventName,
      eventType: this.props.eventName.eventType,
      horse: this.props.eventName.horse,
    });
  }
openModal() {
    this.setState({
      modalIsOpen: true
    });
  }
closeModal() {
    this.setState({
      modalIsOpen: false,
      messageFromServer: ''
    });
  }
handleSelectChange(e) {
    if (e.target.name == "horse") {
      this.setState({
        horse: e.target.value
        });
  
    // }
    // if (e.target.name == "date") {
    //   this.setState({
    //     date: e.target.value
    //   });
    }
  }
handleTextChange(e) {
    if (e.target.name == "eventName") {
      this.setState({
        eventName: e.target.value
      });
    }
if (e.target.name == "eventType") {
      this.setState({
        eventType: e.target.value
      });
    }
  }
onClick(e) {
    this.update(this);
  }
update(e) {
    axios.post('/update',
      querystring.stringify({
        _id: e.state.id,
        eventName: e.state.eventName,
        eventType: e.state.eventType,
        horse: e.state.horse
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
render() {
    if(this.state.messageFromServer == ''){
      return (
        <div>
          <Button bsStyle="warning" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-edit"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add EventName"
            className="Modal">
<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
            <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
          </Link><br/>
<fieldset>
            <label for="eventName">ResultNotes:</label><input type="text" id="eventName" name="eventName" value={this.state.eventName} onChange={this.handleTextChange}></input>
            <label for="eventType">EventType:</label><input type="text" id="eventType" name="eventType" value={this.state.eventType} onChange={this.handleTextChange}></input>
            <label for="horse">Horse:</label><select id="horse" name="horse" value={this.state.horse} onChange={this.handleSelectChange}>
                      <option value="Tess" id="Tess">Tess</option>
                      <option value="Squirrel" id="Squirrel">Squirrel</option>
                      <option value="Ardilla" id="Ardilla">Ardilla</option>
                </select>
          </fieldset>
<div className='button-center'>
              <br/>
              <Button bsStyle="warning" bsSize="small" onClick={this.onClick}>Update</Button>
            </div>
          </Modal>
        </div>
      )
    }
    else{
      return (
        <div>
         <Button bsStyle="warning" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-edit"></span></Button>
         <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           contentLabel="Add EventName"
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
export default Update;