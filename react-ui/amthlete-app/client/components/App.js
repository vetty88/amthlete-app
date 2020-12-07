import React from 'react';
import axios from 'axios';
import Add from './Add';
// import { Tab, Tabs } from 'react-bootstrap';
// import HorseTabsRouter from './tabs/horseTabsRouter';
// import EventNameTabs from './tabs/eventNameTabs';
export default class App extends React.Component {
constructor() {
    super();
  this.state = {selectedHorse:'Tess', data: []};
    this.getData = this.getData.bind(this);
  }
componentDidMount() {
    this.getData(this, '#');
  }
  componentWillReceiveProps(nextProps) {
    this.getData(this, '#');
  }
getData(ev){
    axios.get('/getAll?horse')
      .then(function(response) {
        ev.setState({data: response.data});
      });
  }
render() {
    return (
      <div>
        <Add selectedHorse={this.state.selectedHorse} 
         />
        <table>
          <thead>
            <tr><th></th><th className='eventName-col'>EventName</th><th className='button-col'>EventType</th><th className='button-col'>Horse</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map(function(competition){
                return  <tr><td className='eventType-col'></td><td className='eventType-col'>{competition.eventType}</td><td className='button-col'>{competition.horse}</td><td className='button-col'>{competition.horse}</td>
                </tr>
              })
            }
            </tbody>
</table>
      </div>
    );
  }
}