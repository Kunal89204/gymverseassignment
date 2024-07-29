import React from 'react';
import { Link } from 'react-router-dom';
import gymImage from '../media/online-workout-home-gym-living-room-laptop-virtual-fitness-training-video-sport-lesson-girl-athlete-doing-exercises-284201465.webp'; // Replace with the path to your gym image
import { GrYoga } from "react-icons/gr";

const Fit = () => {
  return (
    <div className=" flex items-center justify-center  mt-[3rem] p-4">
      <div className="flex flex-col lg:flex-row bg-gradient-to-br from-gray-800 to-gray-950 rounded-lg shadow-lg overflow-hidden max-w-6xl">
        <div className="w-full lg:w-1/2">
          <img src={'https://i.pinimg.com/originals/13/94/f7/1394f78be0e4b5a132726d4491c9c717.jpg'} alt="Gym" className=" object-cover lg:rounded-none lg:w-2/3 h-auto lg:rounded-l-lg" />
        </div>
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black italic mb-4 text-white">Welcome to Our Gym</h1>
          <p className="text-gray-500 mb-6">"The only bad workout is the one that didn't happen."</p>
          <div className="flex justify-center lg:justify-start space-x-8">
            <Link to="/Fitness">
              <button className="bg-pink-700 w-full lg:w-[60%] lg:ml-[9rem] font-extrabold font-serif flex gap-4 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
                Virtual Gym
                <GrYoga className='mt-1' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fit;
