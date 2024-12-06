import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
//import Footer from "../components/Footer";
import SidebarAdmin from "../components/SidebarAdmin";
import SLIITImage from "../assets/SLIIT.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Image with Transparency */}
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

      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-30"
        style={{
          zIndex: -1,
        }}
      ></div>

      {/* Navbar with Sidebar Toggle */}
      <NavbarAdmin isSidebarOpen={isSidebarOpen} />

      {/* Sidebar Component */}
      <SidebarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Page Content */}
      <div
        className="flex flex-1 flex-col items-center mt-48"
        style={{
          marginLeft: isSidebarOpen ? "250px" : "0",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <div className="flex flex-col gap-y-10 items-center">
          
          {/* Add User Button */}
          <div className="mt-4 flex justify-end">
            <Link to="/user">
              <button
                className="bg-[#3258a3] text-white font-semibold hover:bg-sky-600 px-6 py-3 rounded-sm"
              >
                Add new users
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
