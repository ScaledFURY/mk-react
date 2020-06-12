//<span class="checkout-subtotal-value"></span>


const SubtotalValue = (props) => {
  return props.cart.localCart === undefined ? "a": props.cart.localCart.subTotal;
}


export default SubtotalValue;