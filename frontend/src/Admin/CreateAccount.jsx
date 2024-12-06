import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import NavbarAdmin from "../components/NavbarAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import SLIITImage from "../assets/SLIIT.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CreateAccount = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  //const [USERNAME, setUSERNAME] = useState("");
  const [password, setpassword] = useState("");
  //const [role, setrole] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSaveAccount = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5555/user", { fullname, email, password })
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Account Created Successfully", { variant: "success" });
        navigate("/admin/home");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error occurred while creating account", {
          variant: "error",
        });
        console.error(error);
      });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen flex flex-col">

      {/* Navbar with Sidebar Toggle */}
      <NavbarAdmin isSidebarOpen={isSidebarOpen} />

      {/* Sidebar Component */}
      <SidebarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Full-Screen Background Image */}
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

      {loading && <Spinner />}

      <BackButton/>

      {/* Content */}
      <div className="flex flex-grow justify-center items-center mt-20">
        <div className="flex flex-col border-2 mb-14 border-braves-navy rounded-xl w-[500px] p-4 mt-14 bg-opacity-90">
          <h1 className="text-3xl text-braves-navy font-semibold text-center my-4">
            Create User Account
          </h1>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-600">Full Name:</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="border-2 border-gray-500 px-5 py-2 w-full"
              placeholder="Enter your full name"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-600">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-500 px-5 py-2 w-full"
              placeholder="Enter your email"
            />
          </div>

          <div className="my-4 relative">
            <label className="text-xl text-gray-600 mb-2 block">
              Password:
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"} // Toggle between 'password' and 'text'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="border-2 border-gray-500 px-5 py-2 w-full pr-10" // Add padding to the right for the icon
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {passwordVisible ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* <div className="my-4">
                        <label className="text-xl mr-4 text-gray-600">User Role:</label>
                        <select
                            value={role}
                            onChange={(e) => setrole(e.target.value)}
                            className="border-2 border-gray-500 px-5 py-2 w-full"
                        >
                            <option value="" disabled>
                                Select the user's role
                            </option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div> */}

          <div className="flex justify-center mt-8 mb-4">
            <button
              className="p-2 w-64 text-white bg-[#13274F] border-2 border-braves-navy font-bold rounded-full  transition-all duration-300 ease-in-out"
              onClick={handleSaveAccount}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CreateAccount;
