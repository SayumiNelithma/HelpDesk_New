import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateAccount = () => {
    const [fullname, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [USERNAME, setUSERNAME] = useState("");
    const [PASSWORD, setPASSWORD] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveAccount = () => {
        const data = {
            fullname,
            address,
            email,
            dob,
            gender,
            phonenumber,
            USERNAME,
            PASSWORD,
        };

        setLoading(true);
        axios
            .post("http://localhost:5555/account", data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Account Created Successfully", { variant: "success" });
                navigate("/");
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
                    <label className="text-xl mr-4 text-gray-500">Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="Enter your address"
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
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Date of Birth</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl text-gray-500">Gender</label>
                    <div className="mt-2">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Male
                        </label>
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                checked={gender === "other"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Other
                        </label>
                    </div>
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Phone Number</label>
                    <input
                        type="text"
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="Enter your phone number"
                    />
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
        </div>
    );
};

export default CreateAccount;
