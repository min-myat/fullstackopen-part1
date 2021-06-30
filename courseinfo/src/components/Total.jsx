import React from 'react';

import './Total.css';

const Total = ({ parts }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <div className="total-container">
      <div className="total-title">Number of exercises</div>
      <span className="total">{total}</span>
    </div>
  );
};

export default Total;
