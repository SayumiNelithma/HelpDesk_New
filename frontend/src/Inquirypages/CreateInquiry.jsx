import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import NavbarTwo from '../components/NavbarTwo';
import Footer from '../components/Footer';
import SLIITImage from "../assets/SLIIT.jpg";

const CreateInquiry = () => {
  const [requestType, setrequestType] = useState('');
  const [requestDate, setrequestDate] = useState('');
  const [priority, setpriority] = useState('');
  const [subject, setsubject] = useState('');
  const [description, setdescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveInquiry = () => {
    const data = {
      requestType,
      requestDate,
      priority,
      subject,
      description,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/inquiry', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Inquiry Created successfully', { variant: 'success' });
        navigate('/user/home');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <NavbarTwo />
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${SLIITImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: -1,
        }}
      ></div>
      {/* <BackButton /> */}
      <h1 className='text-3xl mt-28 mb-7 text-center'>SLIIT Student Support</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 mb-32 border-braves-navy rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Request Type</label>
          <select
            value={requestType}
            onChange={(e) => setrequestType(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          >
            <option value="" disabled>Select a request type</option>
            <option value="IT Issue">IT Issue</option>
            <option value="Software Installation">Software Installation</option>
            <option value="Password Reset">Password Reset</option>
            <option value="Hardware Issue">Hardware Issue</option>
            <option value="Service Access Request">Service Access Request</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Feedback or Suggestion">Feedback or Suggestion</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Request Date</label>
          <input
            type='date'
            value={requestDate}
            onChange={(e) => setrequestDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Priority</label>
          <select
            value={priority}
            onChange={(e) => setpriority(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          >
            <option value="" disabled>Select priority level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Subject</label>
          <input
            type='text'
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          <option value="" disabled>Short description of the issue</option>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Description</label>
          <textarea
            type='text'
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'

          />
          <option value="" disabled>Detailed description of the issue</option>
        </div>
        <button
            className="p-2 w-full  text-white bg-[#13274F] border-2 border-braves-navy font-bold rounded-full transition-all duration-300 ease-in-out"
            onClick={handleSaveInquiry}
          >
            Submit
          </button>
      </div>
      <Footer />
    </div>
  );
}

export default CreateInquiry;
