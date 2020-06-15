import React from 'react'

const SubtotalValue = (props) => {
  if (props.cart === undefined) {
    return null;
  }
  return props.cart.localCart === undefined ? "a": props.cart.localCart.subTotal;
}


export default SubtotalValue;