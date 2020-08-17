import React from 'react';

export default function(props) {
    
  return (
    <div>
    <h1>Checkout</h1>

    <div className="checkout-cart-display">
    </div>

    <hr />

    <h3>Checkout Paypal</h3>

    <form className="checkout-paypal-form">
      <div className="form-group">
        <label htmlFor="paypal_checkout_country">Country</label>
        <select id="paypal_checkout_country" type="text" name="paypal_checkout_country">
        </select>
      </div>
      <button className="checkout-submit-paypal">Checkout Paypal</button>
    </form>

    <hr />

    <h3>Checkout Stripe</h3>
    <form className="checkout-credit-card-form">
      <h4>Contract Information</h4>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" defaultValue="sblackstone+testing@gmail.com" />
      </div>

      <h4>Shipping Address</h4>

      <div className="form-group">
        <label htmlFor="shipping_first_name">First Name</label>
        <input type="text" id="shipping_first_name" name="shipping_first_name" defaultValue="Test" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_last_name">Last Name</label>
        <input id="shipping_last_name" type="text" name="shipping_last_name" defaultValue="Order" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_address_1">Address 1</label>
        <input id="shipping_address_1" type="text" name="shipping_address1" defaultValue="123 Fake St" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_address_2">Address 2</label>
        <input id="shipping_address_2" type="text" name="shipping_address2" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_city">City</label>
        <input id="shipping_city" type="text" name="shipping_city" defaultValue="Fakeville" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_state">State</label>
        <select id="shipping_state" name="shipping_state" data-country="US" defaultValue="CT">
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="shipping_postal_code">ZIP Code</label>
        <input type="text" name="shipping_postal_code" defaultValue="06401" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_country">Country</label>
        <select id="shipping_country" type="text" name="shipping_country">
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="shipping_phone">Phone</label>
        <input id="shipping_phone" type="text" name="shipping_phone" />
      </div>

      <h4>Billing Address</h4>

      <div className="form-group">
        <input type="radio" id="billing_use_shipping_true" name="billing_use_shipping" defaultValue="true" defaultChecked />
        <label htmlFor="billing_use_shipping_true">Same as Shipping Address</label>

        <input type="radio" id="billing_use_shipping_false" name="billing_use_shipping" defaultValue="false" />
        <label htmlFor="billing_use_shipping_false">Use a different billing address</label>
      </div>


      <div className="checkout-billing-fields">
        <div className="form-group">
          <label htmlFor="billing_first_name">First Name</label>
          <input type="text" id="billing_first_name" name="billing_first_name" />
        </div>

        <div className="form-group">
          <label htmlFor="billing_last_name">Last Name</label>
          <input id="billing_last_name" type="text" name="billing_last_name" />
        </div>

        <div className="form-group">
          <label htmlFor="billing_address_1">Address 1</label>
          <input id="billing_address_1" type="text" name="billing_address1" />
        </div>

        <div className="form-group">
          <label htmlFor="billing_address_2">Address 2</label>
          <input id="billing_address_2" type="text" name="billing_address2" />
        </div>

        <div className="form-group">
          <label htmlFor="billing_city">City</label>
          <input id="billing_city" type="text" name="billing_city" />
        </div>


        <div className="form-group">
          <label htmlFor="billing_state">State</label>
          <select id="billing_state" name="billing_state" data-country="US">
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="billing_postal_code">ZIP Code</label>
          <input type="text" name="billing_postal_code" />
        </div>

        <div className="form-group">
          <label htmlFor="billing_country">Country</label>
          <select id="billing_country" type="text" name="billing_country">
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="billing_phone">Phone</label>
          <input id="billing_phone" type="text" name="billing_phone" />
        </div>
      </div>

      <h4>Credit Card</h4>

      <div className="form-group"> <div className="frm-flds fl"><div id="stripe-cc-number"></div></div></div>
         <div className="form-group"> <div className="frm-flds half-fld fl">  <div id="stripe-exp"></div></div></div>
                    <div className="form-group"></div> <div className="frm-flds half-fld fr"> <div id="stripe-cvv"></div></div>
      <button className="checkout-submit-credit-card">Buy</button>

    </form>
    </div>


  )
}