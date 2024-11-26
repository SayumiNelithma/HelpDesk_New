import React, { useState } from 'react';
// import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Header from '../components/Header';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveAdmin = (event) => {
    event.preventDefault();
    setLoading(true);

    // Mock Admin Login Validation
    if (username === 'admin123' && email === 'admin@gmail.com' && password === '123456789') {
      setLoading(false);
      enqueueSnackbar('Login Successful', { variant: 'success' });
      navigate('/admin/home'); // Navigate to Home Page after successful login
    } else {
      setLoading(false);
      enqueueSnackbar('Invalid username or password', { variant: 'error' });
    }
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

export default AdminLogin;
