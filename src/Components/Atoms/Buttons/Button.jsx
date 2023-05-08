import React from 'react';

// eslint-disable-next-line
export default function Button({ height, title, width, onClick }) {
  return (
    <div>
      <button
        className="btn"
        style={{ padding: height, width }}
        type="submit"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}
