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
import LocalCart from './local-cart';
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
  
  const [ cart, setCartReal ] = useState(null);

  const [ meta, setMeta ] = useState(null);

  const [ apiClient, setApiClient] = useState(null);
  
  const [ localCart, setLocalCart ] = useState(null);
  
  
  const setCart = (cart) => {
    setCartReal(cart);
    setLocalCart(new LocalCart(cart.localCart));
  };
  
  window.cart = cart;
  window.localCart = localCart;
    
  useEffect(()=> {
    const newSettings = Object.assign({}, props, loadSettings());
    setSettings(newSettings);
    setApiClient(new ApiClient(newSettings));
  }, [ props ]);

  useEffect(()=> {
    if (apiClient !== null) {
      (async () => {
        const meta = await apiClient.getMeta();        
        setMeta(meta);
        setCart(await apiClient.getCart({ ...settings, ...meta }));
      })();      
    }
  }, [ settings, apiClient ]);
  
  
  const passProps = { settings, cart, meta, apiClient, setCart, localCart };


  return (
    <Router>
      <Switch>
    
        <Route path="/lander1">
          <Lander1 {...passProps}   />
        </Route>

        <Route path="/checkout1">
          <Checkout1 {...passProps}   />
        </Route>

        <Route path="/upsell1">
          <Checkout1 {...passProps}   />
        </Route>

        <Route path="/upsell2">
          <Checkout1 {...passProps}   />
        </Route>


        <Route path="/receipt">
          <Receipt {...passProps}   />
        </Route>

        <Route path="/demo">
          <Demo {...passProps}   />
        </Route>
        

      </Switch>
    </Router>
  );
}

export default App;
