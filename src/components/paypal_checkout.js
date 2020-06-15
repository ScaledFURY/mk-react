import React from 'react';
import CountriesSelect from './countries_select';

const paypalFormHandler = (props) => {
  const paypalUrl = `https://${props.settings.apiEndpoint}/v1/paypal/${props.apiClient.sessionId}/init`;
  setTimeout(() => { window.location = paypalUrl }, 10);
  return false;
};


function PaypalCheckout(props) { 
  return (
    <form className="checkout-paypal-form" onSubmit={() => { paypalFormHandler(props); }}>
      <div className="form-group">
        <label htmlFor="paypal_checkout_country">Country</label>
        <CountriesSelect {...props} />
      </div>
      <input type="submit" className="checkout-submit-paypal" value={props.text} onClick={() => { paypalFormHandler(props) }} />
    </form>
  )
}

export default PaypalCheckout;