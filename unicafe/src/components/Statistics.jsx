import React from 'react';
import Statistic from './Statistic';

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
        <Statistic name="😃 Good" value={good} />
        <Statistic name="😐 Neutral" value={neutral} />
        <Statistic name="😠 Bad" value={bad} />

        <hr className="my-4" />

        <Statistic name="All" value={total} />
        <Statistic name="Average" value={average} />
        <Statistic name="Positive" value={positive} />
      </div>
    </>
  );
};

export default Statistics;
