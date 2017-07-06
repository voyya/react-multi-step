import React from 'react'
import MultiStep from 'react-multi-step'
import moment from 'moment'

export default class Default extends React.Component {
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
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">{`
<MultiStep
    selected={this.state.startDate}
    onChange={this.handleChange}
/>
`}
        </code>
      </pre>
      <div className="column">
        <MultiStep
            selected={this.state.startDate}
            onChange={this.handleChange} />
      </div>
    </div>
  }
}
