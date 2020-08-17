import React from 'react';
import logo from './logo.svg';
import Lander1 from './Lander1';
import Checkout1 from './Checkout1'
import Upsell1 from './Upsell1';
import Upsell2 from './Upsell2';
import Receipt from './Receipt';
import Demo from './Demo';
import loadSettings from './load_settings';
import ApiClient from './ApiClient';
import { useState, useEffect } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App(props) {
  
  
  const [ settings, setSettings ] = useState(null);
  
  useEffect(()=> {
    const tmp = Object.assign({}, props, loadSettings());
    tmp.apiClient  = new ApiClient(tmp);
    setSettings(tmp);      
  }, [ props ]);

  useEffect(()=> {
    if (settings !== null && !settings.meta) {
      (async () => {
        const meta = await settings.apiClient.getMeta();        
        const t = Object.assign({}, settings, meta);
        t.cart = await settings.apiClient.getCart(t);
        setSettings(t);
      })();
    }
  }, [ settings ]);
  


  return (
    <Router>
      <Switch>

        <Route path="*" render={() => {
          
          const qp = new URLSearchParams(window.location.search);
          const page = qp.get('page');;
          
        
          switch (page) {
            case 'lander1':    return ( <Lander1 {...settings}   />);
            case 'checkout1':  return ( <Checkout1 {...settings} />);
            case 'upsell1':    return ( <Upsell1 {...settings}   />);
            case 'upsell2':    return ( <Upsell2 {...settings}   />);
            case 'receipt':    return ( <Receipt {...settings}   />);
            case 'demo':       return ( <Demo    {...settings}   />);
            default:           return (null);
          
          }


        }} />
        

      </Switch>
    </Router>
  );
}

export default App;
