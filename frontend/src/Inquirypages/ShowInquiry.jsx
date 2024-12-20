import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import NavbarTwo from "../components/NavbarTwo";

axios.defaults.withCredentials = true;

const ShowInquiry = () => {
  const [inquiry, setInquiry] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/inquiry/details/${id}`, {
        withCredentials: true,
      })
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

  return (
    <div className="p-4 mt-24">
      <NavbarTwo />

      <div className="button">
        <Link to={`/user/myinquiries`}>
          <button>Back</button>
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
    </div>
  );
};

export default ShowInquiry;
