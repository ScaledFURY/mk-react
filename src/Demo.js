import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-coy.css';
import './Demo.scss';
import 'prismjs/components/prism-jsx.js';
import Cart from './components/Cart';
import CouponField from './components/CouponField.js';
import SubtotalValue from './components/SubtotalValue.js';
import AddonToggle from './components/AddonToggle.js';
import SelectVariant from './components/SelectVariant.js';


const CartDemoLine = (props) => {
  return (
    <React.Fragment>
    <div className="left">
      <pre>
        <code className="language-jsx">
        {`<Cart {...props} />`}
        </code>
      </pre>
    </div>
    <div className="right">
      <Cart {...props} />
    </div>
    </React.Fragment>
    
  )
};


const CouponFieldDemoLine = (props) => {
  return (
    <React.Fragment>
    <div className="left">
      <pre>
        <code className="language-jsx">
        {`<CouponField {...props} />`}
        </code>
      </pre>
    </div>
    <div className="right">
      <CouponField {...props} />
    </div>
    </React.Fragment>
    
  )
};


const SubtotalValueDemoLine = (props) => {
  return (
    <React.Fragment>
    <div className="left">
      <pre>
        <code className="language-jsx">
        {`<SubtotalValue {...props} />`}
        </code>
      </pre>
    </div>
    <div className="right">
      <SubtotalValue {...props} />
    </div>
    </React.Fragment>
    
  )
};


const AddonToggleDemoLine = (props) => {
  return (
    <React.Fragment>
    <div className="left">
      <pre>
        <code className="language-jsx">
        {`<AddonToggle {...props} variantId={32465472979081} text={"Add Insurance"} />`}
        </code>
      </pre>
    </div>
    <div className="right">
      <AddonToggle {...props} variantId={32465472979081} text={"Add Insurance"} />
    </div>
    </React.Fragment>
    
  )
};


const SelectVariantDemoLine = (props) => {
  let codeStr = ``;
  
  codeStr += `<SelectVariant {...props} variantId={32453520621705} text={"Choose 32453520621705"} />\n`;
  codeStr += `<SelectVariant {...props} variantId={32453520654473} text={"Choose 32453520654473"} />\n`;
  codeStr += `<SelectVariant {...props} variantId={33207187669129} text={"Choose 33207187669129"} />\n`;
  return (
    <React.Fragment>
    <div className="left">
      <pre>
      <code className="language-jsx">{codeStr}</code>
      </pre>
    </div>
    <div className="right">
        <SelectVariant {...props} variantId={32453520621705} text={"Choose 32453520621705"} />
        <SelectVariant {...props} variantId={32453520654473} text={"Choose 32453520654473"} />
        <SelectVariant {...props} variantId={33207187669129} text={"Choose 33207187669129"} />
    </div>
    </React.Fragment>
    
  )
};




export default function(props) {
  window.stuff = props;

  const codeStr = '<Stuff />';

  useEffect(()=> {
    Prism.highlightAll();
  });

  return (
    <div className="demo-root">
      <h1>Demo</h1>
      <div className="demo-container">
        <CartDemoLine {...props} />
      </div>

      <div className="demo-container">
        <CouponFieldDemoLine {...props} />  
      </div>
      <div className="demo-container">
        <SubtotalValueDemoLine {...props} />  
      </div>
    
      <div className="demo-container">
        <AddonToggleDemoLine {...props} />  
      </div>


      <div className="demo-container">
        <SelectVariantDemoLine {...props} text={"Add Insurance"} />  
      </div>
        

      <ul>
        <li>checkout-variant-target</li>
      </ul>
    </div>
    
  )
}