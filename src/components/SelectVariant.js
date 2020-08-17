import React, { useState } from 'react';


export default function (props) {
  if (!props.localCart) {
    return null;
  }
  
  if (!props.variantId) {
    throw "No variant id specified for AddonToggle";
  }
  
  const classes = props.localCart.hasVariant(props.variantId) ? "checkout-selected-variant" : "";
    
  const selectVariantHandler = async (e) => {
    props.setCart(await props.apiClient.setCurrentVariant(props.variantId));
  };
    
  return (
    <button onClick={selectVariantHandler} className={classes}>{props.text}</button>
  )
}