import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateAdminLogin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveAdmin = (event) => {
    event.preventDefault();
    if (username === 'admin@123' && email === 'admin@gmail.com'&& password === '123456789') {
      alert("Login Success")
      window.location.href="/homedoctor";
      
    } else {
      alert("Enter correct username and password")
      setError('Invalid username or password');
    }

    setLoading(true);
    axios
      .post('http://localhost:5555/admin', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Login Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error occurred while creating login', { variant: 'error' });
        console.error(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Login</h1> {/* Centered the text */}
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
          <label className="text-xl mr-4 text-gray-500">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            placeholder="Enter Email"
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
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveAdmin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default CreateAdminLogin;
