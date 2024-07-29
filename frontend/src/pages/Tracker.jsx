import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from 'react-router-dom';
import BarGraph from '../components/BarGraph'; // Import the BarGraph component

const FitnessTracker = () => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [activities, setActivities] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('activities'));
    if (storedActivities) {
      setActivities(storedActivities);
      calculateTotalCalories(storedActivities);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
    calculateTotalCalories(activities);
  }, [activities]);

  const MET = {
    running: 10, cycling: 8, swimming: 7, walking: 3.8, jogging: 7, pushups: 8, deadlift: 6,
    jumpingrope: 12, aerobics: 6.5, hiking: 7, weightlifting: 3, yoga: 2.5, dancing: 5, rowing: 7,
    boxing: 8, tennis: 7, basketball: 6.5, soccer: 7, skiing: 6, climbing: 8, elliptical: 5,
    pilates: 3, zumba: 5, squats: 5, benchpress: 3.5, deadlifts: 6, pullups: 4.5, bicepcurls: 3,
    tricepdips: 4, legpress: 4, lunges: 5, shoulderpress: 4, plank: 3, legcurls: 3.5, calfraises: 3,
    chestfly: 4, latpulldown: 3.5, cablerows: 4, russiantwists: 3.5, battleropes: 6, kettlebellswings: 6,
    burpees: 8, poweryoga: 4, resistancetraining: 6, kettlebellexercises: 6, spinclass: 8.5,
    stepaerobics: 7.5, trxtraining: 6, treadmillrunning: 9.8, treadmillwalking: 3.8, hiit: 8,
    circuittraining: 8
  };

  const handleAddActivity = () => {
    const caloriesBurned = calculateCalories(activity, duration);
    const newActivity = { activity, duration, caloriesBurned, id: Date.now() };
    setActivities([...activities, newActivity]);
    setActivity('');
    setDuration('');
  };

  const calculateCalories = (activity, duration) => {
    const metValue = MET[activity.toLowerCase()] || 5; // Default MET value if activity is not listed
    return metValue * parseFloat(duration) || 0;
  };

  const calculateTotalCalories = (activities) => {
    const total = activities.reduce((sum, { caloriesBurned }) => sum + caloriesBurned, 0);
    setTotalCalories(total);
  };

  const pieData = {
    labels: activities.map(({ activity }) => activity),
    datasets: [
      {
        data: activities.map(({ caloriesBurned }) => caloriesBurned),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
      },
    ],
  };

  const activityOptions = Object.keys(MET);

  return (
    <div className="p-4">
      <Link to="/">
        <button className="bg-blue-200 text-red-500 font-bold py-2 px-4 rounded ml-[70rem] absolute lg:flex hidden">BACK</button>
      </Link>
      <h1 className="text-4xl font-extrabold mb-8 underline font-serif">Fitness Tracker</h1>
      
      <div className="mb-4 flex flex-col md:flex-row items-center justify-between">
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="border p-2 mb-2 md:mb-0 bg-pink-100 w-full md:w-[30%]"
        >
          <option value="">Select Activity</option>
          {activityOptions.map((act, index) => (
            <option key={index} value={act}>{act}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border p-2 mb-2 md:mb-0 bg-pink-100 w-full md:w-[30%]"
        />
        <button onClick={handleAddActivity} className="bg-pink-700 text-white p-2 ml-0 md:ml-4">
          Add Activity
        </button>
      </div>
      
      <div className='flex flex-col md:flex-row gap-[15rem] mt-[3.5rem]'>
        <div className="w-full md:w-[65%]">
          <ul>
            {activities.map(({ activity, duration, caloriesBurned, id }) => (
              <li key={id} className="border p-4 mb-2 bg-pink-200 text-slate-600 rounded-md border-zinc-300 font-extrabold">
                {activity} | {duration} minutes | {caloriesBurned.toFixed(2)} calories
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h2 className="text-xl font-bold bg-black text-white p-3 rounded-xl">Total Calories Burned: {totalCalories.toFixed(2)}</h2>
          </div>
        </div>

        <div className='w-full md:w-[35%]'>
          <h2 className="text-4xl font-serif font-extrabold text-center text-pink-700 mb-3">Workout Duration Breakdown</h2>
          <Pie data={pieData} />
        </div>
      </div>
      
      <div className='w-full'>
        <BarGraph data={activities} /> 
      </div>
    </div>
  );
};

export default FitnessTracker;
