import React from 'react';
import logo from './logo.svg';
import Lander1 from './Lander1';
import Lander2 from './Lander2';
import Checkout from './Checkout'


import Upsell1 from './Upsell1';
import Upsell2 from './Upsell2';
import Receipt from './Receipt';

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

        <Route path="/upsell1">
          <Upsell1 />
        </Route>

        <Route path="/upsell2">
          <Upsell2 />
        </Route>

        <Route path="/receipt">
          <Receipt />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
