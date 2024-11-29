import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SLIITImage from "../assets/SLIIT.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here, e.g., redirect to search results page
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Image with transparency */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${SLIITImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          zIndex: -1,
        }}
      ></div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-30"
        style={{
          zIndex: -1,
        }}
      ></div>

      <Navbar />

      <div className="flex flex-1 flex-col items-center mt-48">
        <div className="flex flex-col gap-y-10 items-center">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="How we can help you today?"
              className="border border-gray-300 p-2 rounded-l-md flex-grow" // Use flex-grow to fill available space
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#000000] text-white p-2 px-4 rounded-r-md hover:bg-[#232323]"
            >
              Search
            </button>
            <div className="mt-8 flex justify-end">
          <Link to="/inquiry/create">
            <button
              className="bg-[#3258a3] text-white font-semibold hover:bg-sky-600 px-6 py-3 rounded-sm"
              onClick={() => setShowType("card")}
            >
              Submit a new inquiry
            </button>
          </Link>
        </div>
          </form>

          {/* Cards Section */}
          <div className="flex justify-center items-center mt-10 mb-32 px-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-[#dbdbdb] shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800">Service 1</h2>
                <p className="text-gray-600 mt-2">
                  Brief description of the service or feature.
                </p>
                <button className="mt-4 bg-[#002D62] text-white p-2 px-4 rounded-md hover:bg-[#001f4d]">
                  Learn More
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-[#dbdbdb] shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800">Service 2</h2>
                <p className="text-gray-600 mt-2">
                  Brief description of the service or feature.
                </p>
                <button className="mt-4 bg-[#002D62] text-white p-2 px-4 rounded-md hover:bg-[#001f4d]">
                  Learn More
                </button>
              </div>

              {/* Card 3 */}
              <div className="bg-[#dbdbdb] shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800">Service 3</h2>
                <p className="text-gray-600 mt-2">
                  Brief description of the service or feature.
                </p>
                <button className="mt-4 bg-[#002D62] text-white p-2 px-4 rounded-md hover:bg-[#001f4d]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
