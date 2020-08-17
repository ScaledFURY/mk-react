import React, { useState } from 'react';


export default function (props) {
  if (!props.cart || props.cart === null) {
    return null;
  }
  
  
  return (props.cart.localCart.subTotal.toFixed(2));
}