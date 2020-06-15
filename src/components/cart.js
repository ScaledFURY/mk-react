import React from 'react';
import $ from 'jquery';

const LineItem = (props) => {
  //console.log("lineItem");
  //console.log(props.lineItem);

  return (
    <React.Fragment>
    <tr className="product-line">
      <td>{props.lineItem.title}</td>
      <td className="checkout-money">{(props.lineItem.price*props.lineItem.quantity).toFixed(2)}</td>
    </tr>

    </React.Fragment>

  )
  return JSON.stringify(props.lineItem);
}

const LineItems = (props) => {
  return props.lineItems.map((li)=> {
    return (<LineItem key={li.variantId} lineItem={li} />)
  })
};


const CouponButton = (props) => {

  const handleAddCoupon = async () => {
    const couponCode = prompt("Enter Coupon Code");
    props.setCart(await props.apiClient.applyCoupon(couponCode));
  };

  if (props.cart.localCart.discountType !== "") {
    return null;
  } else {
    return (
      <button className="checkout-coupon-button" onClick={handleAddCoupon}>Add Coupon</button>
    )
  }

}

const CouponRow = (props) => {
  if (props.discountTotal === 0) {
    return null;
  }

  const negDiscount = props.discountTotal * -1;

  return (
    <React.Fragment>
    <tr className="discount-line">
      <td>Discount</td>
      <td className="checkout-money">{negDiscount.toFixed(2)}</td>
    </tr>
    </React.Fragment>
  )

}

const ShippingRow = (props) => {
  return (
    <React.Fragment>
    <tr className="shipping-line">
      <td>Shipping</td>
      <td className="checkout-money">{props.shippingTotal.toFixed(2)}</td>
    </tr>
    </React.Fragment>

  )
};

export default function(props) {

  if (props.cart === null || !("cart" in props)) {
    return null;
  }

  //console.log("Local Cart");
  //console.log(props.cart.localCart);

  const localCart = props.cart.localCart;
  const lineItems = localCart.lineItems;

  let subtotal = parseFloat(props.cart.localCart.subTotal);

  try {
    subtotal = subtotal.toFixed(2);
  } catch {
  }

  $('.checkout-subtotal-value').html(subtotal);

  return (
    <React.Fragment>
    <CouponButton {...props} />
    <table style={{"width": "100%"}}>
      <tbody>
      <LineItems lineItems={lineItems} />
      <tr className="subtotal-line">
        <td>Subtotal</td>
        <td className="checkout-money">{subtotal}</td>
      </tr>

      <CouponRow discountTotal={props.cart.localCart.discountTotal} />
      <ShippingRow shippingTotal={props.cart.localCart.shippingTotal} />
    {/*
      <tr className="tax-line">
        <td>Tax</td>
        <td className="checkout-money">{props.cart.localCart.taxTotal.toFixed(2)}</td>
      </tr>
    */}
      <tr className="total-line">
        <td>Grand Total</td>
        <td className="checkout-money">{props.cart.localCart.total.toFixed(2)}</td>
      </tr>
      </tbody>
    </table>
    </React.Fragment>
  )
}
