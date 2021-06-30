import React from 'react';

const Statistic = (props) => {
  return (
    <div className="flex">
      <div className="w-24">{props.name}</div> {props.value}
      {props.name === 'Positive' && '%'}
    </div>
  );
};

export default Statistic;
