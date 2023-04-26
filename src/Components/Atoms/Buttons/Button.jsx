import React from 'react';
import './Button.css';

// eslint-disable-next-line
export default function Button({ height, title, width }) {
  return (
    <div>
      <button className="btn" style={{ padding: height, width }} type="submit">
        {title}
      </button>
    </div>
  );
}
