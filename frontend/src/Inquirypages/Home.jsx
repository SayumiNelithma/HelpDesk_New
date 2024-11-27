import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SLIITImage from "../assets/SLIIT.jpg";

const Home = () => {
  const navigate = useNavigate();

  // Define handleLogin function
  const handleLogin = () => {
    // You can add logic here to handle login, for example:
    navigate("/user/login");
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
