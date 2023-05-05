import React from 'react';

// eslint-disable-next-line
export default function Button({ height, title, width, className }) {
  return (
    <div>
      <button
        className={className}
        style={{ padding: height, width }}
        type="submit"
      >
        {title}
      </button>
    </div>
  );
}
