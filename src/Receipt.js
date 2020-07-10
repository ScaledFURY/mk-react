import React from 'react';

export default function(props) {
  // Temporary Hack
  setTimeout(()=> {
    window.checkout.init();
  }, 50);

  return (
    <div>
    <h1>Receipt</h1>
    
    

    <div className="checkout-cart-display">
    </div>
    
    </div>
    
  )
}