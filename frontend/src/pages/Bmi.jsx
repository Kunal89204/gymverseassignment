import React, { useState } from 'react';

const Bmi = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = (event) => {
    event.preventDefault();

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInMeters) || isNaN(weightInKg)) {
      alert('Please enter valid numbers for height and weight.');
      return;
    }

    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    let resultText = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
      resultText += 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      resultText += 'You have a normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
      resultText += 'You are overweight.';
    } else {
      resultText += 'You are obese.';
    }

    setResult(resultText);
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-cover">
      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-500 mb-4">BMI Calculator</h1>
        <form onSubmit={calculateBMI}>
          <div className="mb-4 text-left">
            <label htmlFor="height" className="block text-gray-700 mb-2">Height (cm):</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="weight" className="block text-gray-700 mb-2">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105"
          >
            Calculate BMI
          </button>
        </form>
        {result && <div className="mt-4 text-lg text-blue-500">{result}</div>}
      </div>
    </div>
  );
};

export default Bmi;
