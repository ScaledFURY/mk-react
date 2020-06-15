import React, { useState, useEffect } from 'react';
import './app.css';
import ApiClient from './api_client';
import loadSettings from './load_settings';
import SubtotalValue from './components/subtotal_value';
import VariantSelectButton from './components/variant_select_button';
import Loading from './loading';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import Cart from './components/cart';

import 'prismjs/themes/prism.css';

window.Prism = Prism;  Prism.highlightAll();


const Feature1 = (props) => {
  return (
    <div className="feature">
      <div className="code">
        <pre>
          <code className="language-jsx">
            {`<SubtotalValue {...props} />`}
          </code>
        </pre>
      </div>
      <div className="example">
        <SubtotalValue {...props} />
      </div>
    </div>
  );    
};

const Feature2 = (props) => {
  return (
    <div className="feature">
      <div className="code">
        <pre>
          <code className="language-jsx">
          {`<VariantSelectButton {...props} variantId="32453520621705" text="Select 32453520621705" />`}
          </code>
        </pre>
      </div>
      <div className="example">
        <VariantSelectButton {...props} variantId="32453520621705" text="Select 32453520621705" />
        <VariantSelectButton {...props} variantId="32453520654473" text="Select 32453520654473" />
        <VariantSelectButton {...props} variantId="33207187669129" text="Select 33207187669129" />

      </div>
    </div>
  );    
};


const Feature3 = (props) => {
  const cart = props.cart;
  return (
    <div className="feature">
      <div className="code">
        <pre>
          <code className="language-jsx">
          {`<Cart {...props} />`}
          </code>
        </pre>
      </div>
      <div className="example">
        <Cart {...props} />
      </div>
    </div>
  );    
};



function App() {
  const promises = [];
  const settings = loadSettings();
  const apiClient = new ApiClient(settings);
  const [cart,setCart] = useState({});

  const props = {
    settings: settings,
    apiClient: apiClient,
    cart: cart,
    setCart: setCart
  };
    
  useEffect(() => {
    // Using an IIFE
    (async function anyNameFunction() {
      setCart(await apiClient.getCart(settings));
    })();
  }, []);
  
  if (Object.keys(cart).length === 0) {
    return <Loading />
  }
  
  setTimeout(()=> {
    Prism.highlightAll()
  }, 25);
  
  return (
    
    <div className="container">
      <Feature3 {...props} />
      <Feature1 {...props} />
      <Feature2 {...props} />
    </div>
    

  );
}

export default App;


