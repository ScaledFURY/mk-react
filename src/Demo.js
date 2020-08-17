import React, { useState, useEffect } from 'react';


export default function(props) {
  window.stuff = props;

  return (
    <React.Fragment>
      <h1>Demo</h1>
      <div className="demo-container">
        {JSON.stringify(props.cart)}
      </div>

    </React.Fragment>
    
  )
}