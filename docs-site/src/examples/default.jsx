import React from 'react'
import MultiStep from 'react-multi-step'

export default class Default extends React.Component {
  constructor (props) {
    super(props)
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
/>
`}
        </code>
      </pre>
      <div className="column">
        <MultiStep
             />
      </div>
    </div>
  }
}
