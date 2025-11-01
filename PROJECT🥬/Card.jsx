import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`card-shadow ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;