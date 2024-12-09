import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from "react-router-dom";
import Spinner from '../components/Spinner';
import NavbarAdmin from "../components/NavbarAdmin";
import Sidebar from '../components/SidebarAdmin';

axios.defaults.withCredentials = true;

const ViewInquiry = () => {
  const [inquiry, setInquiry] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/inquiry/details/${id}`, { withCredentials: true })
      .then((response) => {
        setInquiry(response.data.inquiry);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleApprove = () => {
    axios
      .put(`http://localhost:5555/inquiry/${id}/approve`)
      .then(() => {
        navigate('/approver/home'); // Redirect to home after approval
      })
      .catch((error) => {
        console.error('Error approving inquiry:', error);
      });
  };

  const handleReject = () => {
    axios
      .put(`http://localhost:5555/inquiry/${id}/reject`)
      .then(() => {
        navigate('/approver/home'); // Redirect to home after rejection
      })
      .catch((error) => {
        console.error('Error rejecting inquiry:', error);
      });
  };



  return (
    <div className="p-4 mt-24">
      {/* Navbar with Sidebar Toggle */}
      <NavbarAdmin isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div>
        <Link to={`/approver/home`}>
          
            Back
          
        </Link>
      </div>

      <h1 className="text-3xl my-4">Show Inquiry</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{inquiry._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Request Type</span>
            <span>{inquiry.requestType}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Request Date</span>
            <span>{inquiry.requestDate}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Priority</span>
            <span>{inquiry.priority}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Subject</span>
            <span>{inquiry.subject}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Description</span>
            <span>{inquiry.description}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(inquiry.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(inquiry.updatedAt).toString()}</span>
          </div>
        </div>
      )}

      {/* Bottom-Right Buttons */}
      <div className="fixed bottom-4 right-4 flex space-x-4">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          onClick={handleApprove}
        >
          Approve
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          onClick={handleReject}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ViewInquiry;
