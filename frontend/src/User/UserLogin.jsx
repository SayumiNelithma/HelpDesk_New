import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import axios from "axios";
import SLIITImage from "../assets/SLIIT.jpg";

const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  axios.defaults.withCredentials = true;
  const handleLogin = (e) => {
    e.preventDefault()
        axios.post('http://localhost:5555/login', {email, password })
            .then(res => {
                setLoading(false);
                enqueueSnackbar("Login Successful", { variant: "success" });
                console.log(res.data)
                navigate("/user");
            }).catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error occurred while login", {
                    variant: "error",
                });
                console.error(error);
            })
  }

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   const loginData = {
  //     u_username,
  //     u_password,
  //     u_email,
  //   };

  //   axios
  //     .post("http://localhost:5555/user", loginData) // Sends login data
  //     .then((response) => {
  //       if (response.data.success) {
  //         enqueueSnackbar("Login Successful", { variant: "success" });
  //         navigate("/account/create"); // Navigate to a dashboard or another page
  //       } else {
  //         enqueueSnackbar("Invalid credentials", { variant: "error" });
  //       }
  //     })
  //     .catch((error) => {
  //       enqueueSnackbar("Error occurred while logging in", {
  //         variant: "error",
  //       });
  //       console.error(error);
  //     });
  // };

  return (
    <div className="min-h-screen flex flex-col mt-16">
      <Navbar />
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

      <div className="flex flex-1 mt-5 justify-center items-center">
        <div className="w-[400px] border-2 border-braves-navy rounded-xl p-6 mt-5 mb-5">
          <h1 className="text-3xl text-center mb-8">Login</h1>

          <div className="my-4">
            <label className="text-xl text-gray-600 mb-2 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              placeholder="Enter your Email"
            />
          </div>

          <div className="my-4">
            <label className="text-xl text-gray-600 mb-2 block">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
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
            className="p-2 w-full  text-white bg-[#13274F] border-2 border-braves-navy font-bold rounded-full transition-all duration-300 ease-in-out"
            onClick={handleLogin}
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p>
              <span>Don't have an account? </span>
              <button
                onClick={() => navigate("/user")} // Navigate to Signup page
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
