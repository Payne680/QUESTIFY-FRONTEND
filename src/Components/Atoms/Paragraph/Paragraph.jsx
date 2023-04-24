import React from 'react';
import './Paragraph.css';

// eslint-disable-next-line
export default function Paragraph({ title, color, size, width }) {
  return (
    <div>
      <p style={{ color, fontSize: size, width }}>{title}</p>
    </div>
  );
}
