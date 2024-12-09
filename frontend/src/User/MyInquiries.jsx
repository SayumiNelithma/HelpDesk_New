import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import InquiryTable from "../components/home/InquiryTable";
import InquiryCard from "../components/home/InquiryCard";
import NavbarTwo from "../components/NavbarTwo";
import Footer from "../components/Footer";
import SLIITImage from "../assets/SLIIT.jpg";

const MyInquiries = () => {
  const [inquiry, setInquiry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/inquiry")
      .then((response) => {
        const sortedInquiries = response.data.data.sort(
          (a, b) => new Date(b.requestDate) - new Date(a.requestDate)
        );
        setInquiry(sortedInquiries);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${SLIITImage})`,
          opacity: 0.6,
        }}
      ></div>
      <NavbarTwo />
      <div className="flex-grow p-4 mt-32 mr-8">

      <div className="flex justify-end">
          <div className="flex space-x-4">
            <Link to="/inquiry/create">
              <button
                className="bg-[#3258a3] text-white font-semibold hover:bg-sky-600 px-6 py-3 rounded-sm"
                onClick={() => setShowType("card")}
              >
                Submit a new Inquiry
              </button>
            </Link>

            <Link to="/user/myinquiries/resolvedinquiries">
              <button
                className="bg-[#2e902c] text-white font-semibold hover:bg-green-600 px-6 py-3 rounded-sm"
                onClick={() => setShowType("card")}
              >
                Resolved Inquiries
              </button>
            </Link>

            <Link to="/user/myinquiries/rejectedinquiries">
              <button
                className="bg-[#912626] text-white font-semibold hover:bg-red-600 px-6 py-3 rounded-sm"
                onClick={() => setShowType("card")}
              >
                Rejected Inquiries
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-3xl  ">My Inquiries</h1>
        </div>

        {/* Submit button placed on the right side, between the header and service card */}
        

        <div className="flex gap-6 mt-10">
          {/* White background container */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 mt-0">
            {loading ? (
              <Spinner />
            ) : showType === "table" ? (
              <InquiryTable inquiry={inquiry} />
            ) : (
              <InquiryCard inquiry={inquiry} />
            )}
          </div>

          {/* Service 1 Box */}
          {/* <div className="bg-[#dbdbdb] shadow-md rounded-lg p-6 w-60">
            <h2 className="text-2xl font-bold text-gray-800">Service 1</h2>
            <p className="text-gray-600 mt-2">
              Brief description of the service or feature. This is a detailed
              description of the service offered.
            </p>
            <Link className="underline">Learn More</Link>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyInquiries;
