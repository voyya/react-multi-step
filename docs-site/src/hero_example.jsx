import React from 'react'
import MultiStep from 'react-multi-step'

export default class HeroExample extends React.Component {
  constructor (props) {
    super(props)
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  render () {
    return <MultiStep
        autoFocus
        onChange={this.handleChange} />
  }
}
