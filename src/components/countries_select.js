import React from 'react';
import Countries from './countries.json';

function CountryOptions() {
  const result = [];
  for (const [key,value] of Object.entries(Countries)) {
    result.push(
      <option key={value} value={value}>{key}</option>
    )
  }
  return result;
}

function CountriesSelect(props) {  

  const handleChangeCountry = async (e) => {
    props.setCart(await props.apiClient.setCountry(e.target.value));
  }
  
  return (
      <select id="paypal_checkout_country" type="text" name="paypal_checkout_country" value={props.cart.shippingZone} onChange={handleChangeCountry}>
        <CountryOptions {...props} />
      </select>
  )
}

export default CountriesSelect;