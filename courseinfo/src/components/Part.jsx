import React from 'react';

import './Part.css';

const Part = (props) => {
  return (
    <div className="content-container">
      <div className="content-title">{props.part}</div>
      <span className="content-count">{props.exercises}</span>
    </div>
  );
};

export default Part;
