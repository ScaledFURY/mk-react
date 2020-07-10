import React from 'react';
import logo from './logo.svg';
import Lander1 from './Lander1';
import Lander2 from './Lander2';
import Checkout from './checkout'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lander1">
          <Lander1 />
        </Route>
        <Route path="/lander2">
          <Lander2 />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
