import React from 'react'
import MultiStep from 'react-multi-step'
import moment from 'moment'

export default class HeroExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  render () {
    return <MultiStep
        autoFocus
        selected={this.state.startDate}
        onChange={this.handleChange} />
  }
}
