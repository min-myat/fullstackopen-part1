import React from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Statics</h3>
      <hr />
      <div className="my-4">
        <div>Good {good}</div>
        <div>Neutral {neutral}</div>
        <div>Bad {bad}</div>
        <div>All {total}</div>
        {total !== 0 && <div>Average {average}</div>}
        {total !== 0 && <div>Positive {positive}%</div>}
      </div>
    </>
  );
};

export default Statistics;
