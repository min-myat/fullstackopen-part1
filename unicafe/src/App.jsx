import React, { useState } from 'react';

import Header from './components/Header';

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
            <button onClick={handleGood} className="btn">
              good
            </button>
            <button onClick={handleNeutral} className="btn">
              neutral
            </button>
            <button onClick={handleBad} className="btn mr-0">
              bad
            </button>
          </div>
        </div>

        <div className="p-8 bg-white rounded shadow max-w-md">
          <h3 className="text-2xl font-semibold mb-4">Statics</h3>
          <hr />
          <div className="my-4">
            <div>Good {good}</div>
            <div>Neutral {neutral}</div>
            <div>Bad {bad}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
