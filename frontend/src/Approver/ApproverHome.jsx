import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import InquiryCard from "../components/home/InquiryCard";
import SLIITImage from "../assets/SLIIT.jpg";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import NavbarApprover from "../components/NavbarApprover";
import SidebarApprover from "../components/SidebarApprover";

const ApproverHome = () => {
  const [inquiry, setInquiry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/inquiry")
      .then((response) => {
        setInquiry(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
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
      {/* Navbar with Sidebar Toggle */}
      <NavbarApprover isSidebarOpen={isSidebarOpen} />

      {/* Sidebar Component */}
      <SidebarApprover isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div
        className={`flex-grow p-4 mt-20 mr-8 transition-all ${isSidebarOpen ? "ml-64" : "ml-0"}`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl mb-8 mt-6">Pending Inquiries</h1>

          <div className="flex justify-end">
            <div className="flex space-x-4">
              <Link to="/approver/resolvedinquiries">
                <button
                  className="bg-[#2e902c] text-white font-semibold hover:bg-green-600 px-6 py-3 rounded-sm"
                  onClick={() => setShowType("card")}
                >
                  Resolved Inquiries
                </button>
              </Link>

              <Link to="/approver/rejectedinquiries">
                <button
                  className="bg-[#912626] text-white font-semibold hover:bg-red-600 px-6 py-3 rounded-sm"
                  onClick={() => setShowType("card")}
                >
                  Rejected Inquiries
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          {/* White background container */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 mt-0">
            {loading ? (
              <Spinner />
            ) : showType === "table" ? (
              <InquiryTable_Approver inquiry={inquiry} />
            ) : (
              <InquiryCard inquiry={inquiry} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InquiryTable_Approver = ({ inquiry }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Request Type</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">Request Date</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">Priority</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">Subject</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">Description</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">Status</th>
        </tr>
      </thead>
      <tbody>
        {inquiry.map((inquiry, index) => (
          <tr key={inquiry._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
            <td className="border border-slate-700 rounded-md text-center">{inquiry.requestType}</td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">{inquiry.requestDate}</td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">{inquiry.priority}</td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">{inquiry.subject}</td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">{inquiry.description}</td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">{inquiry.status}</td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/approver/viewinquiry/${inquiry._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApproverHome;
