import React, { useState } from 'react';
import { FaDumbbell, FaRunning, FaBicycle, FaSwimmer, FaWalking } from 'react-icons/fa';
import { GrYoga } from 'react-icons/gr';

const challenges = [
  { name: 'Push-ups', icon: <FaDumbbell /> },
  { name: 'Running', icon: <FaRunning /> },
  { name: 'Cycling', icon: <FaBicycle /> },
  { name: 'Diving', icon: <FaSwimmer /> },
  { name: 'Walking', icon: <FaWalking /> },
  { name: 'Yoga', icon: <GrYoga /> },
];

const Spinner = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spin = () => {
    setSpinning(true);
    setResult(null);
    const randomIndex = Math.floor(Math.random() * challenges.length);
    setTimeout(() => {
      setSpinning(false);
      setResult(challenges[randomIndex]);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg text-slate-400 font-semibold mt-10 mb-4">
        Spin the Wheel for Your Next Workout Challenge!
      </h2>
      
      <button
        onClick={spin}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Spin
      </button>
      
      {result && (
        <div className="mt-4 flex flex-col items-center text-xl text-blue-500">
          <p className="mb-2">Get for:</p>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{result.icon}</span>
            <span className="text-2xl">{result.name}</span>
          </div>
        </div>
      )}
      
      <div className="relative w-64 h-64 mt-8">
        <div
          className={`absolute inset-0 rounded-full border-4 border-blue-500 flex items-center justify-center ${
            spinning ? 'animate-spin' : ''
          }`}
        >
          <div className="grid grid-cols-3 gap-2">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-blue-500 text-2xl"
              >
                <div className="text-4xl">{challenge.icon}</div>
                <span className="mt-2 text-sm">{challenge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
