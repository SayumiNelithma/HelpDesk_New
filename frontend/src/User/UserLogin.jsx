import React, { useState } from 'react';
// import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Header from '../components/Header';
import axios from 'axios';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);

    const loginData = {
      username,
      password,
    };

    // Replace with an actual API call for user authentication
    axios
      .post('http://localhost:5555/user/login', loginData) // Update the URL to match your API
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          enqueueSnackbar('Login Successful', { variant: 'success' });
          navigate('/inquiry/create'); // Redirect to user home page
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
      <Header /> {/* Render the Header component */}
      <h1 className="text-3xl my-4 text-center">Login</h1>
      {loading && <Spinner />}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            placeholder="Enter Username"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            placeholder="Enter Password"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
