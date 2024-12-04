import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavbarTwo from '../components/NavbarTwo'; 
import profileImage from '../assets/Profile.jpg';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    fullname: "Nisal Rajapaksha",
    image: profileImage,
    email: "nisal@gmail.com",
    username: "Nisal@2000",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChangePassword = () => {
    // Logic to change password can be added here
    alert("Change Password functionality goes here!");
  };

  return (
    <div>
      <NavbarTwo /> 

      <div className="profile-container">
        <div className="back-button-container">
          <Link to={`/user/home`}>
            <button className="back-button">Back</button>
          </Link>
        </div>

        <h1>My Profile</h1>

        <div className="profile-info">
          {/* Centering the profile image */}
          <div className="image-container">
            <img src={userData.image} alt='Profile' className="profile-image" />
          </div>

          {isEdit ? (
            <input
              type='text'
              value={userData.fullname}
              onChange={e => setUserData(prev => ({ ...prev, fullname: e.target.value }))}
              className="input-field"
            />
          ) : (
            <p className="profile-name">{userData.fullname}</p>
          )}

          <hr />
          <div className="info-section">
            <p className="info-title">Information</p>
            <div>
              {/* Username Field */}
              {isEdit ? (
                <>
                  <label>Username:</label>
                  <input
                    type='text'
                    value={userData.username}
                    onChange={e => setUserData(prev => ({ ...prev, username: e.target.value }))}
                    className="input-field"
                  />
                </>
              ) : (
                <>
                  <label>Username:</label>
                  <p>{userData.username}</p>
                </>
              )}

              {/* Email Field */}
              {isEdit ? (
                <>
                  <label>Email:</label>
                  <input
                    type='text'
                    value={userData.email}
                    onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))}
                    className="input-field"
                  />
                </>
              ) : (
                <>
                  <label>Email:</label>
                  <p>{userData.email}</p>
                </>
              )}
            </div>
          </div>

          <div className="button-group">
            {isEdit ? (
              <>
                <button onClick={() => setIsEdit(false)} className="save-button">Save Information</button>
                {/* Change Password Button */}
                <button onClick={handleChangePassword} className="change-password-button">Change Password</button>
              </>
            ) : (
              <>
                <button onClick={() => setIsEdit(true)} className="edit-button">Edit</button>
                {/* Change Password Button */}
                <button onClick={handleChangePassword} className="change-password-button">Change Password</button>
              </>
            )}
          </div>
        </div>
      </div>

      
      <style jsx>{`
        .profile-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
          position: relative; /* Allows positioning of child elements */
          margin-top: 140px; /* Added top margin to avoid overlap with navbar */
          margin-bottom: 110px;
        }
        .back-button-container {
          position: fixed; /* Fixes the button's position */
          top: 100px; /* Distance from the top adjusted for navbar height */
          left: 10px; /* Distance from the left */
          z-index: 100; /* Ensures it stays above other elements */
        }
        .back-button {
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 15px;
          cursor: pointer;
        }
        h1 {
          text-align: center;
          color: #333;
        }
        .profile-info {
          margin-top: 20px; /* Adjusted for spacing */
          text-align: center;
        }
        .image-container {
          display: flex;
          justify-content: center; /* Centers the image horizontally */
          margin-bottom: 20px; /* Adds space below the image */
        }
        .profile-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
        }
        .profile-name {
          font-size: 1.5em;
          color: #555;
        }
        .info-section {
          margin-top: 20px;
        }
        .info-title {
          font-weight: bold;
          margin-bottom: 10px;
        }
        label {
          display: block; /* Makes the label take a full line */
          margin-top: 10px; /* Adds some space above the label */
        }
        .input-field {
          width: calc(100% - 20px);
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .button-group {
          margin-top: 20px;
        }
        .edit-button, .save-button, .change-password-button {
           background-color: #28a745; /* Green for Save and Change Password buttons */
           color: white; 
           border-radius: 4px; 
           padding: 10px; 
           cursor: pointer; 
           border: none; 
           margin-right: 10px; /* Adds space between buttons */
         }
         .change-password-button {
           background-color: #007bff; /* Blue for Change Password button */
         }
      `}</style>
    </div>
  );
};

export default MyProfile;

