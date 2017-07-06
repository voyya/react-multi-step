import React, { Component } from 'react';
import MultiStep from 'react-multi-step';
import moment from 'moment';

import 'react-multi-step/dist/react-multi-step.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment()
    };
  }

  render() {
    return (
      <MultiStep
        selected={this.state.startDate}
        onChange={this.handleChange.bind(this)}
      />
    );
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
}

export default App;
