/* eslint-disable react/prop-types */
import React from 'react';
import '../Atoms.css';

function Input({ type, value, placeholder }) {
  return (
    <div>
      <input type={type} value={value} placeholder={placeholder} required />
    </div>
  );
}

export default Input;
