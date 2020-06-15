import React from 'react'

const AddonToggle = (props) => {

  const handleAddonToggle = async () => {
    props.setCart(await props.apiClient.toggleAddon(props.variantId));
  };

  return (
    <button className="checkout-toggle-addon" onClick={handleAddonToggle}>{props.text}</button>
  )
}


export default AddonToggle;