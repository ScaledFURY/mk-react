import React, { useState } from 'react';


export default function (props) {
  if (!props.localCart) {
    return null;
  }
  
  if (!props.variantId) {
    throw "No variant id specified for AddonToggle";
  }
  
  const classes = props.localCart.hasVariant(props.variantId) ? "checkout-selected-addon" : "";
    
  const addonHandler = async (e) => {
    await props.setCart(await props.apiClient.toggleAddon(props.variantId));

  };
    
  return (
    <button onClick={addonHandler} className={classes} >{props.text}</button>
  )
}