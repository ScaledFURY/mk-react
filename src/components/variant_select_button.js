import React from 'react'


const handleVariantSelect = async (props) => {
  const result = await props.apiClient.setCurrentVariant(props.variantId);
  props.setCart(result);
};

const VariantSelectButton = (props) => {
  return (
    <button className="checkout-select-variant" onClick={()=> { handleVariantSelect(props) }}>{props.text}</button>
  );
}


export default VariantSelectButton;