import React from 'react'
import hljs from 'highlight.js'
import Default from './examples/default'
import CodeExampleComponent from './code_example_component'

// import 'react-multi-step/dist/react-multi-step.css'
import './style.scss'

export default class exampleComponents extends React.Component {
  componentDidMount () {
    hljs.initHighlightingOnLoad()
  }

  examples = [{
    title: 'Default',
    component: <Default />
  }]

  renderExamples = () =>
    this.examples.map((example, index) =>
      <CodeExampleComponent key={`example-${index}`} id={index} title={example.title}>
        {example.component}
      </CodeExampleComponent>
    )

  renderLeftColumn = () =>
    this.examples.map((example, index) =>
      <li className="examples__navigation-item" key={`link-${index}`}>
        <a href={`#example-${index}`}>
          {example.title}
        </a>
      </li>
    )

  render () {
    return <div>
      <h1>Examples</h1>
      <ul className="examples__navigation">
        {this.renderLeftColumn()}
      </ul>
      <div className="examples">
        {this.renderExamples()}
      </div>
    </div>
  }
}
