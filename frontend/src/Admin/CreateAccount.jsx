import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreateAccount = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [USERNAME, setUSERNAME] = useState("");
    const [PASSWORD, setPASSWORD] = useState("");
    const [role, setrole] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveAccount = () => {
        const data = {
            fullname,
            email,
            USERNAME,
            PASSWORD,
            role,
        };

        setLoading(true);
        axios
            .post("http://localhost:5555/account", data)
            .then(() => {
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

    return (
        <div className="p-4">
            <Navbar />
            <BackButton />
            <h1 className="text-3xl my-4">Create User Account</h1>
            {loading && <Spinner />}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">

                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Full Name</label>
                    <input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="Enter your email"
                    />
                </div>

                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>User Role</label>
                    <select
                        value={role}
                        onChange={(e) => setrole(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    >
                        <option value="" disabled>Select the user's role</option>
                        <option value="User">Low</option>
                        <option value="Admin">Medium</option>
                    </select>
                </div>

                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Username</label>
                    <input
                        type="text"
                        value={USERNAME}
                        onChange={(e) => setUSERNAME(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="Enter your username"
                    />
                </div>

                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Password</label>
                    <input
                        type="password"
                        value={PASSWORD}
                        onChange={(e) => setPASSWORD(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="Enter your password"
                    />
                </div>

                <button className="p-2 bg-sky-300 m-8" onClick={handleSaveAccount}>
                    Create Account
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default CreateAccount;
