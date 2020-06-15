import React from 'react';

const YearOptions = (props) => {
  const result = [<option value="">- Select Exp Year -</option>];

  const curYear = (new Date()).getFullYear();
  for (let year=curYear; year < (curYear+15); year++) {
    result.push(<option value={year}>{year}</option>);
  }
    
  return result;
}


const CcCheckoutForm = (props) => {

  return (
    
    <form className="checkout-credit-card-form">

    <select>
     <YearOptions />
    </select>

      <h4>Contract Information</h4>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" value="sblackstone+testing@gmail.com" />
      </div>

      <h4>Shipping Address</h4>

      <div className="form-group">
        <label htmlFor="shipping_first_name">First Name</label>
        <input type="text" id="shipping_first_name" name="shipping_first_name" value="Test" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_last_name">Last Name</label>
        <input id="shipping_last_name" type="text" name="shipping_last_name" value="Order" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_address_1">Address 1</label>
        <input id="shipping_address_1" type="text" name="shipping_address1" value="123 Fake St" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_address_2">Address 2</label>
        <input id="shipping_address_2" type="text" name="shipping_address2" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_city">City</label>
        <input id="shipping_city" type="text" name="shipping_city" value="Fakeville" />
      </div>

      <div className="form-group">
        <label htmlFor="shipping_state">State</label>
        <select id="shipping_state" name="shipping_state" data-country="US" value="CT">
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="shipping_postal_code">ZIP Code</label>
        <input type="text" name="shipping_postal_code" value="06401" />
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
        <input type="radio" id="billing_use_shipping_true" name="billing_use_shipping" value="true" checked />
        <label htmlFor="billing_use_shipping_true">Same as Shipping Address</label>

        <input type="radio" id="billing_use_shipping_false" name="billing_use_shipping" value="false" />
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

      <div className="form-group">
        <label htmlFor="cc_number">Credit Card Number</label>
        <input id="cc_number" type="text" name="cc_number" value="" /> 
      </div>

      <div className="form-group">
        <label htmlFor="cc_exp_month">Exp Month</label>
        <select id="cc_exp_month" type="text" name="cc_exp_month">
          <option value="">- Select Exp Month -</option>
          <option value="1">01 - January</option>
          <option value="2">02 - Febuary</option>
          <option value="3">03 - March</option>
          <option value="4">04 - April</option>
          <option value="5">05 - May</option>
          <option value="6">06 - June</option>
          <option value="7">07 - July</option>
          <option value="8">08 - August</option>
          <option value="9">09 - September</option>
          <option value="10">10 - October</option>
          <option value="11">11 - November</option>
          <option value="12">12 - December</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cc_exp_year">Exp Year</label>
        <select id="cc_exp_year" type="text" name="cc_exp_year">
          <YearOptions />
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cc_cvv">CVV</label>
        <input id="cc_cvv" type="text" name="cc_cvv" value="123" />
      </div>

      <button className="checkout-submit-credit-card">Buy</button>

    </form>
    
    
    
  )

  
};

export default CcCheckoutForm;

