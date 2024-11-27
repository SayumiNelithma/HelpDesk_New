import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import axios from 'axios';

const UserLogin = () => {
  const [u_username, setu_username] = useState('');
  const [u_password, setu_password] = useState('');
  const [u_email, setu_email] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);

    const loginData = {
      u_username,
      u_password,
      u_email,
    };

    axios
      .post('http://localhost:5555/user', loginData)
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          enqueueSnackbar('Login Successful', { variant: 'success' });
          navigate('/inquiry/create');
        } else {
          enqueueSnackbar('Invalid credentials', { variant: 'error' });
        }
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error occurred while logging in', { variant: 'error' });
        console.error(error);
      });
  };

  return (
    <div className="p-4">
      <Navbar />

      <div className="mt-20 text-center">
        <h1 className="text-3xl">Login</h1>
      </div>

      {loading && <Spinner />}

      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[400px] p-4 mx-auto mt-6">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Username</label>
          <input
            type="text"
            value={u_username}
            onChange={(e) => setu_username(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-80 ml-4"
            placeholder="Enter Username"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Email</label>
          <input
            type="email"
            value={u_email}
            onChange={(e) => setu_email(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-80"
            placeholder="Enter Email"
          />
        </div>
        <div className="my-4 relative">
          <label className="text-xl mr-4 text-gray-500">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={u_password}
              onChange={(e) => setu_password(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-80 pr-10"
              placeholder="Enter Password"
            />
            
          </div>
        </div>
        
        <button
          className="p-2 bg-sky-300 m-8"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default UserLogin;
