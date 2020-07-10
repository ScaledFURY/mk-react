import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function(props) {
  

  return (
    <div>
      <h1>Lander 1</h1>
      <button className="checkout-select-variant" data-variant-id="32453520621705">
        ONE MIGHTY SIGHT
      </button>

      <button className="checkout-select-variant" data-variant-id="32453520654473">
        TWO MIGHTY SIGHTS
      </button>


      <button className="checkout-select-variant" data-variant-id="33207187669129">
        THREE MIGHTY SIGHTS
      </button>

      <hr />
    
      <button className="checkout-addon-toggle" data-variant-id="32465472979081">
        Add Shipping Insurance
      </button>
      
      <hr />
    
      <h3>Current Variant Target</h3>

      <div className="checkout-variant-target" data-variant-id="32453520621705">
        checkout-variant-target 32453520621705
      </div>

      <div className="checkout-variant-target" data-variant-id="32453520654473">
        checkout-variant-target 32453520654473
      </div>


      <div className="checkout-variant-target" data-variant-id="33207187669129">
        checkout-variant-target 33207187669129
      </div>
    
      <hr />
      
      <Link to="/checkout">
        <button>Checkout!</button>
      </Link>
        
    </div>
    
    
    
  )
}