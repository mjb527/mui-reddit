import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
