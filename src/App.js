import React, { useState, useEffect } from 'react';
import './App.css';
import ApiClient from './api_client';
import loadSettings from './load_settings';



function App() {
  const promises = [];
  const settings = loadSettings();
  const apiClient = new ApiClient(settings);
  const [cart,setCart] = useState({});
  
  
  console.log(settings);
  
  useEffect(() => {
    // Using an IIFE
    (async function anyNameFunction() {
      setCart(await apiClient.getCart(settings));
    })();
  }, []);
  
  if (Object.keys(cart).length === 0) {
    return "Loading";
  }
  
  return (
    <h1>{JSON.stringify(cart)}</h1>

  );
}

export default App;
