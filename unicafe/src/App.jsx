import React, { useState } from 'react';
import Button from './components/Button';

import Header from './components/Header';
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div className="text-gray-900 h-screen bg-gray-50">
      <Header />

      <div className="mx-4 grid justify-center items-center gap-12">
        <div className="p-8 bg-white rounded shadow max-w-md">
          <h3 className="text-2xl font-semibold">Give Feedback</h3>
          <div className="mt-10">
            <Button name="good" handleClick={handleGood} />
            <Button name="neutral" handleClick={handleNeutral} />
            <Button name="bad" handleClick={handleBad} />
          </div>
        </div>

        <div className="p-8 bg-white rounded shadow max-w-md">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      </div>
    </div>
  );
};

export default App;
