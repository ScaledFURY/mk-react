import React from 'react';


const AddressLine = (props) => {
    
  if (props.addressLine === null || props.addressLine === undefined || props.addressLine.trim() === "") {
    return null;
  } else {
    return (
      <tr><td colSpan="3">{props.addressLine}</td></tr>
    )
  }
}

export default function(props) {
  
  const addr = props.address;
  
  return (
      <table>
        <tbody>
          <tr><td colSpan="3">{addr.first_name} {addr.last_name}</td></tr>
          <AddressLine addressLine={addr.address1} />
          <AddressLine addressLine={addr.address2} />
          <tr><td>{addr.city}</td><td>{addr.province}</td><td>{addr.zip}</td></tr>
        </tbody>        
      </table>
  );
  
};