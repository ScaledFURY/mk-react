import React from 'react';
import logo from './logo.svg';
import Lander1 from './Lander1';
import Checkout1 from './Checkout1'
import Upsell1 from './Upsell1';
import Upsell2 from './Upsell2';
import Receipt from './Receipt';
import Demo from './Demo';

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

        <Route path="*" render={() => {
          
          const qp = new URLSearchParams(window.location.search);
          const page = qp.get('page');;
          
        
          switch (page) {
            case 'lander1':    return ( <Lander1 />);
            case 'checkout1':  return ( <Checkout1 />);
            case 'upsell1':    return ( <Upsell1 />);
            case 'upsell2':    return ( <Upsell2 />);
            case 'receipt':    return ( <Receipt />);
            case 'demo':       return ( <Demo    />);
            default:           return (null);
          
          }


        }} />
        

      </Switch>
    </Router>
  );
}

export default App;
