/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { X } from 'react-feather';
import './Chip.css';

function Chip(props) {
  return (
    <div className="chip" style={{ backgroundColor: props.color }}>
      {props.text}
      {props.close && <X onClick={props.onClose ? props.close() : ''} />}
    </div>
  );
}

export default Chip;
