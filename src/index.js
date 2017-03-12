import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const deepstream = require('deepstream.io-client-js')
const DeepstreamMixin = require('deepstream.io-tools-react')

const client = deepstream('localhost:6020').login({}, () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
})

DeepstreamMixin.setDeepstreamClient(client)
