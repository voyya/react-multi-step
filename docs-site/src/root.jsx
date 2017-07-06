import React from 'react'
import ExampleComponents from './example_components.jsx'

export default class Root extends React.Component {
  render () {
    return (
      <div>
        <div className="hero">
          <div className="hero__content">
            <h1 className="hero__title">
              ReactJS Multi Step
            </h1>
            <div className="hero__crafted-by">
              <a href="https://voyya.com" className="hero__crafted-by-link">
                Developed by Voyya Labs
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h1>ReactJS Multi Step</h1>
          <p className="badges">
            <a href="https://npmjs.org/package/react-multi-step">
              <img src="https://badge.fury.io/js/react-multi-step.svg" className="badge" />
            </a>
            <a href="https://travis-ci.org/voyya/react-multi-step">
              <img src="https://travis-ci.org/voyya/react-multi-step.svg?branch=master" className="badge" />
            </a>
            <a href="https://david-dm.org/voyya/react-multi-step">
              <img src="https://david-dm.org/voyya/react-multi-step.svg" className="badge" />
            </a>
            <a href={'https://npmjs.org/package/react-multi-step' +
              '?__hstc=72727564.ca821b01b5b29b1831f0936a681f0483.1428679773810.1435582678273.1438354735499.5' +
              '&__hssc=72727564.1.1438354735499' +
              '&__hsfp=2497064007'}>
              <img src="https://img.shields.io/npm/dm/react-multi-step.svg" className="badge" />
            </a>
          </p>
          <p>A simple and reusable multi-step component for React.</p>

          <h2>Installation</h2>
          <p>The package can be installed via NPM:</p>
          <p><code>npm install react-multi-step --save</code></p>
        </div>
        <div className="wrapper">
          <ExampleComponents />
        </div>

        <a href="https://github.com/voyya/react-multi-step/">
          <img className="github-ribbon" src="images/ribbon.png" alt="Fork me on GitHub" />
        </a>
      </div>
    )
  }
}
