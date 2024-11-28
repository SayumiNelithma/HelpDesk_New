import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import axios from "axios";

const UserLogin = () => {
  const [u_username, setu_username] = useState("");
  const [u_password, setu_password] = useState("");
  const [u_email, setu_email] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);

    const loginData = {
      u_username,
      u_password,
      u_email,
    };

    axios
      .post("http://localhost:5555/user", loginData) // Sends login data
      .then((response) => {
        if (response.data.success) {
          enqueueSnackbar("Login Successful", { variant: "success" });
          navigate("/account/create"); // Navigate to a dashboard or another page
        } else {
          enqueueSnackbar("Invalid credentials", { variant: "error" });
        }
      })
      .catch((error) => {
        enqueueSnackbar("Error occurred while logging in", {
          variant: "error",
        });
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col mt-16">
      <Navbar />

      {loading && <Spinner />}

      <div className="flex flex-1 mt-5 justify-center items-center">
        <div className="w-[400px] border-2 border-braves-navy rounded-xl p-6 mt-5 mb-5">
          <h1 className="text-3xl text-center mb-8">Login</h1>

          <div className="my-4">
            <label className="text-xl text-gray-600 mb-2 block">Username</label>
            <input
              type="text"
              value={u_username}
              onChange={(e) => setu_username(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              placeholder="Enter your Username"
            />
          </div>

          <div className="my-4">
            <label className="text-xl text-gray-600 mb-2 block">Email</label>
            <input
              type="email"
              value={u_email}
              onChange={(e) => setu_email(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              placeholder="Enter your Email"
            />
          </div>

          <div className="my-4">
            <label className="text-xl text-gray-600 mb-2 block">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                value={u_password}
                onChange={(e) => setu_password(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
                placeholder="Enter your Password"
              />
            </div>
          </div>

          <div className="text-right mb-4">
            <button
              onClick={() => navigate("/forgot-password")} // Navigate to Forgot Password page
              className="text-braves-navy font-bold hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            className="p-2 w-full  text-braves-navy border-2 border-braves-navy font-bold rounded-full hover:bg-braves-navy hover:text-white transition-all duration-300 ease-in-out"
            onClick={handleLogin}
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p>
              <span>Don't have an account? </span>
              <button
                onClick={() => navigate("/account/create")} // Navigate to Signup page
                className="text-braves-navy font-bold hover:underline"
              >
                Signup
              </button>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserLogin;
