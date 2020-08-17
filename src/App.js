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

        <Route path="*" render={() => {
          
          const qp = new URLSearchParams(window.location.search);
          const page = qp.get('page');;
          
        
          switch (page) {
            case 'lander1':    return ( <Lander1 {...passProps}   />);
            case 'checkout1':  return ( <Checkout1 {...passProps} />);
            case 'upsell1':    return ( <Upsell1 {...passProps}   />);
            case 'upsell2':    return ( <Upsell2 {...passProps}   />);
            case 'receipt':    return ( <Receipt {...passProps}   />);
            case 'demo':       return ( <Demo    {...passProps}   />);
            default:           return (null);
          
          }


        }} />
        

      </Switch>
    </Router>
  );
}

export default App;
