import React, { useState } from 'react';
import Header from './components/Header';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 1,
    1: 3,
    2: 4,
    3: 2,
    4: 2,
    5: 5,
    6: 1,
  });
  const [mostVoted, setMostVoted] = useState(5);

  const handleNext = () => setSelected(Math.floor(Math.random() * 7));

  const handleVote = () => {
    const copy = { ...votes, [selected]: votes[selected] + 1 };
    setVotes(copy);
    findMostVotes();
  };

  const findMostVotes = () => {
    const max = Math.max(
      votes[0],
      votes[1],
      votes[2],
      votes[3],
      votes[4],
      votes[5],
      votes[6]
    );
    const mostVotedAnecdote = Object.keys(votes).find(
      (key) => votes[key] === max
    );
    setMostVoted(mostVotedAnecdote);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6 bg-white rounded shadow max-w-lg mx-auto my-8">
        <div className="text-cyan-700 text-2xl">{anecdotes[selected]}</div>
        <div className="text-gray-500">has {votes[selected]} votes</div>
        <button className="btn mr-4" onClick={handleVote}>
          vote
        </button>
        <button className="btn" onClick={handleNext}>
          next anectode
        </button>
        <hr className="my-8" />
        <h1 className="text-xl font-bold mb-4">Anecdote with most votes</h1>
        <div className="text-cyan-700 text-xl">{anecdotes[mostVoted]}</div>
        <div className="text-gray-500">has {votes[mostVoted]} votes</div>
      </div>
    </div>
  );
};

export default App;
