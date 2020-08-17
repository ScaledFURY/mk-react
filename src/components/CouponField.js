import React, { useState } from 'react';


export default function (props) {
  if (!props.cart || props.cart === null) {
    return null;
  }
  
  if (props.cart.localCart.discountType !== '') {
    return null;
  }
  
  const [ coupon, setCoupon ] = useState("");

  const saveCoupon = async (e) => {
    const newCart = await props.apiClient.applyCoupon(coupon);
    props.setCart(newCart);
  };
  
  return (
    <React.Fragment>
      <input type="text" className="checkout-coupon-field"  onChange={(e) => { setCoupon(e.target.value.trim() ); }} value={coupon} />
      <button className="checkout-coupon-button" onClick={saveCoupon}>Add Coupon</button>
    </React.Fragment>

  )
}