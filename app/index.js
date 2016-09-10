import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import {Router, Route, hashHistory} from 'react-router';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App } />
    <Route path="/about/" component={ About }/>
  </Router>, mountNode);
