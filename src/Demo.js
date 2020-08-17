import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-coy.css';
import './Demo.scss';
import Cart from './components/Cart';
import CouponField from './components/CouponField.js';
import SubtotalValue from './components/SubtotalValue.js';


const CartDemoLine = (props) => {
  return (
    <React.Fragment>
    <div className="left">
      <pre>
        <code className="language-html">
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
        <code className="language-html">
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
        <code className="language-html">
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


    </div>
    
  )
}