import React, { useState, useEffect } from 'react';
import './App.css';
import ApiClient from './api_client';
import loadSettings from './load_settings';
import SubtotalValue from './subtotal_value';
import Loading from './loading';

function App() {
  const promises = [];
  const settings = loadSettings();
  const apiClient = new ApiClient(settings);
  const [cart,setCart] = useState({});
    
  useEffect(() => {
    // Using an IIFE
    (async function anyNameFunction() {
      setCart(await apiClient.getCart(settings));
    })();
  }, []);
  
  if (Object.keys(cart).length === 0) {
    return <Loading />
  }
  
  return (
    <h1><SubtotalValue cart={cart} /></h1>

  );
}

export default App;
