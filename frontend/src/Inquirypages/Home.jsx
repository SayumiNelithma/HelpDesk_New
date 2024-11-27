import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <div className="flex gap-x-8">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-6 py-3 rounded-lg text-lg"
            onClick={() => navigate('/user/login')} // Navigate to the user Login page
          >
            User
          </button>
          <button
            className="bg-sky-300 hover:bg-sky-600 px-6 py-3 rounded-lg text-lg"
            onClick={() => navigate('/admin/login')} // Navigate to the Admin Login page
          >
            Admin
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
