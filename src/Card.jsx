import React from 'react';
function Card({ title, children }) {
  return (
    <div className="p-4 rounded shadow bg-white">
      <h3 className="font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
export default Card;