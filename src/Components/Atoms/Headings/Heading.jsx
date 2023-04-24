import React from 'react';
import './Heading.css';

// eslint-disable-next-line
export default function Heading({ title, color, size, width }) {
  return (
    <div>
      <h1 style={{ color, fontSize: size, width }}>{title}</h1>
    </div>
  );
}
