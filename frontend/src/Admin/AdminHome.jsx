import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  return (
    <div className="p-4">
      {/* Only show the login button */}
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => navigate('/account/create')} // Navigate to the Admin Login page
        >
          Create User Account
        </button>

        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
        //   onClick={() => navigate('/account/create')} // Navigate to the Admin Login page
        >
          Create Admin Account
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
