import React from 'react';

import './Total.css';

const Total = (props) => {
  return (
    <div className="total-container">
      <div className="total-title">Number of exercises</div>
      <span className="total">{props.total}</span>
    </div>
  );
};

export default Total;
