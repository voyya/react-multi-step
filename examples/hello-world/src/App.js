import React, { Component } from 'react';
import MultiStep from 'react-multi-step';

import 'react-multi-step/dist/react-multi-step.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MultiStep
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
