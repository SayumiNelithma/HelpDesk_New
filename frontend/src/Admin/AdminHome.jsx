import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SLIITImage from "../assets/SLIIT.jpg";

const Home = () => {
  const navigate = useNavigate();

  // Define handleLogin function
  const handleAdd = () => {
    // You can add logic here to handle login, for example:
    navigate("/account/create");
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
          opacity: 0.3, // Decrease opacity for background image
          zIndex: -1, // Ensure image stays behind the content
        }}
      ></div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-30"
        style={{
          zIndex: -1, // Keeps the overlay behind the content
        }}
      ></div>

      <Navbar />
      <div className="flex flex-1 justify-center items-center mt-3">
        <div className="flex flex-col gap-y-10 items-center">
          {" "}
          {/* Increased gap here */}
          
          
          <button
            className="bg-[#002D62] text-white border-none p-2 px-5 rounded-md cursor-pointer text-lg font-semibold 
                       hover:bg-[#001f4d] transition duration-300 ease-in-out transform m-8"
            onClick={handleAdd}
          >
            Add Users
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
