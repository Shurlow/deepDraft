import React, { Component } from 'react';
import logo from './logo.svg';
import Editor from './Editor';
import './App.css';

// const deepstream = require('deepstream.io-client-js')
// const DeepstreamMixin = require('deepstream.io-tools-react')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h1>Hello Deep Editor</h1>
          <Editor dsRecord="test/some-input"/>
        </div>
      </div>
    );
  }
}

// React.createElement({
//   getInitialState() {
//     return {
//       dsState: 'hello deep stream'
//     }
//   },
//
//   mixins: [DeepstreamReact],
//
//   dsStateChange(newRawState) {
//     this.setState({
//       dsState: newRawState
//     })
//   },
//
//   render() {
//     return (
//       <Editor dsState={this.props.dsState} dsStateChange={this.dsStateChange}/>
//     )
//   }
// })


export default App;
