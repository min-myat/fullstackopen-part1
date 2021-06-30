import React from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  if (total === 0) {
    return (
      <>
        <h3 className="text-2xl font-semibold mb-4">Statics</h3>
        <hr />
        <div className="my-4">
          <div>No feedback given</div>
        </div>
      </>
    );
  }
  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Statics</h3>
      <hr />
      <div className="my-4">
        <div>😃 Good {good}</div>
        <div>😐 Neutral {neutral}</div>
        <div>😠 Bad {bad}</div>
        <hr className="my-4" />
        <div>All {total}</div>
        <div>Average {average}</div>
        <div>Positive {positive}%</div>
      </div>
    </>
  );
};

export default Statistics;
