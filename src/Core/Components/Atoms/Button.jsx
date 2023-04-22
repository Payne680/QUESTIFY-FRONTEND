/* eslint-disable react/prop-types */
import React from 'react';
import './Atoms.css';

function Btn({ title }) {
  return (
    <div>
      <button type="submit">{title}</button>
    </div>
  );
}

export default Btn;
