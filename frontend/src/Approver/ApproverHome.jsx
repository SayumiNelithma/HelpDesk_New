import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import InquiryTable_Approver from "./InquiryTable_approver"
import InquiryCard from "../components/home/InquiryCard";
import NavbarAdmin from "../components/NavbarAdmin";
import Sidebar from "../components/Sidebar";
//import Footer from "../components/Footer";
import SLIITImage from "../assets/SLIIT.jpg";

const InquiryList = () => {
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
      <NavbarAdmin isSidebarOpen={isSidebarOpen} />

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow p-4 mt-20 mr-8">
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

          {/* Service 1 Box */}
          {/* <div className="bg-[#dbdbdb] shadow-md rounded-lg p-6 w-60">
            <h2 className="text-2xl font-bold text-gray-800">Service 1</h2>
            <p className="text-gray-600 mt-2">
              Brief description of the service or feature. This is a detailed description of the service offered.
            </p>
            <Link className="underline">
              Learn More
            </Link>
          </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default InquiryList;
