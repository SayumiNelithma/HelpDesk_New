import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import InquiryTable from '../components/home/InquiryTable';
import InquiryCard from '../components/home/InquiryCard';

const Home = () => {
  const [inquiry, setInquiry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/inquiry')
      .then((response) => {
        setInquiry(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Inquiry Card
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => navigate('/admin/login')} // Navigate to the Admin Login page
        >
          Log in
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>List of Inquiries</h1>
        <Link to='/inquiry/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <InquiryTable inquiry={inquiry} />
      ) : (
        <InquiryCard inquiry={inquiry} />
      )}
    </div>
  );
};

export default Home;
