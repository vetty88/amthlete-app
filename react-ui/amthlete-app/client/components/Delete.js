import React from 'react';
import { Link } from 'react-router-dom';
class Delete extends React.Component {
constructor(){
  super();
  this.state={id: '', eventType: '', horse: ''};
  this.onClick = this.onClick.bind(this);
  this.delete = this.delete.bind(this);
}
componentDidMount() {
    this.setState({
      id: this.props.eventName._id,
      eventType: this.props.eventName.eventType,
      horse: this.props.eventName.horse
    });
  }
componentWillReceiveProps(nextProps){
  this.setState({
    id: nextProps.eventName._id,
    eventType:nextProps.eventName.eventType,
    horse:nextProps.eventName.horse
  });
  }
onClick(e){
     this.delete(this);
    }
delete(e){
    axios.get('/delete?id='+e.state.id)
      .then(function(response) {
});
}
render(){
  return (
    <Button bsStyle="danger" bsSize="small" onClick={this.onClick}>
     <Link to={{pathname: '/', search: '?eventType='+this.state.eventType+'&horse='+this.state.horse}} style={{ textDecoration: 'none' }}>
                  <span className="glyphicon glyphicon-remove"></span>
         </Link>
    </Button>
)
 }
}
export default Delete;