import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-coy.css';
import './Demo.scss';


export default function(props) {
  window.stuff = props;

  const codeStr = '<Stuff />';

  useEffect(()=> {
    Prism.highlightAll();
  });

  return (
    <React.Fragment>
      <h1>Demo</h1>
      <div className="demo-container">
        <div className="left">
          <pre>
            <code className="language-html">
            {`
              <Stuff />
            `}
            </code>
          </pre>
        </div>
    
        <div className="right">
            aaaa
        </div>
    
      </div>

    </React.Fragment>
    
  )
}