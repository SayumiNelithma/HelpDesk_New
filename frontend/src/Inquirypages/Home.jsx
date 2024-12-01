import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavbarOne";
import Footer from "../components/Footer";
import SLIITImage from "../assets/SLIIT.jpg";

const Home = () => {
  const navigate = useNavigate();

  // Define handleLogin function
  const handleLogin = () => {
    navigate("/login");
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
          <h1 className="text-5xl font-bold text-braves-navy">
            Welcome to SLIIT Support Services
          </h1>
          <div className="px-48">
            <h1 className="text-xl font-semibold text-braves-navy text-center mx-auto max-w-4xl">
              If you are seeking information, please type in the keywords in the
              search bar. Should you wish to connect with us, please fill the
              Contact Us form. We are constantly updating this site to provide
              up-to-date services for you.
            </h1>
          </div>
          <button
            className="bg-[#002D62] text-white border-none p-2 px-5 rounded-md cursor-pointer text-lg font-semibold hover:bg-[#001f4d] transition duration-300 ease-in-out transform m-8"
            onClick={handleLogin}
          >
            Log in
          </button>

          {/* Cards Section */}
        <div className="flex justify-center items-center mt-10 mb-32 px-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#dbdbdb] shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800">Service 1</h2>
              <p className="text-gray-600 mt-2">
                Brief description of the service or feature.Brief description of the service or feature.Brief description of the service or feature.
                Brief description of the service or feature.Brief description of the service or feature.Brief description of the service or feature.
              </p>
              <button className="mt-4 bg-[#002D62] text-white p-2 px-4 rounded-md hover:bg-[#001f4d]">
                Learn More
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#dbdbdb] shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800">Service 2</h2>
              <p className="text-gray-600 mt-2">
                Brief description of the service or feature.Brief description of the service or feature.Brief description of the service or feature.
                Brief description of the service or feature.Brief description of the service or feature.Brief description of the service or feature.
              </p>
              <button className="mt-4 bg-[#002D62] text-white p-2 px-4 rounded-md hover:bg-[#001f4d]">
                Learn More
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#dbdbdb] shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800">Service 3</h2>
              <p className="text-gray-600 mt-2">
                Brief description of the service or feature.Brief description of the service or feature.Brief description of the service or feature.
                Brief description of the service or feature.Brief description of the service or feature.Brief description of the service or feature.
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
