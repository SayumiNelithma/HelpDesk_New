import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "../assets/Profile.jpg";

const NavbarTwo = ({ isSidebarOpen }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    setToken(false); 
    navigate("/login"); 
  };

  return (
    <header
      style={{
        ...styles.header,
        transform: isSidebarOpen ? "translateX(250px)" : "translateX(0)",
      }}
    >
      <div style={styles.container}>
        <h1 style={styles.title}>
          <a href="/user/home" style={{ textDecoration: "none", color: "inherit" }}>
            Support Desk
          </a>
        </h1>

        <nav style={styles.navList}>
          <a href="/user/home" style={styles.navLink}>
            Home
          </a>
          <a href="/user/services" style={styles.navLink}>
            Services
          </a>
          <a href="/user/aboutus" style={styles.navLink}>
            About Us
          </a>
        </nav>
        <div style={styles.rightSection}>
          {token ? (
            <div style={styles.profileContainer}>
              <img
                src={ProfileImage}
                alt="Profile"
                style={styles.profileImage}
                onClick={toggleMenu} // Show/hide the menu when clicked
              />
              {showMenu && (
                <div style={styles.dropdownMenu}>
                  <Link to="/user/myprofile" style={styles.dropdownItem}>My Profile</Link>
                  <button
                    onClick={handleLogout} // Call the handleLogout function on click
                    style={styles.logoutItem}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-[#3258a3] text-white font-semibold hover:bg-sky-600 px-6 py-3 rounded-sm">
                Account
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#1F305E",
    color: "#fff",
    padding: "20px 30px",
    width: "100%",
    boxSizing: "border-box",
    zIndex: 1000,
    transition: "transform 0.3s ease-in-out",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontSize: "30px",
    fontWeight: "bold",
    color: '#ffffff'
  },
  navList: {
    display: "flex",
    gap: "40px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "color 0.3s",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  profileContainer: {
    position: "relative",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    cursor: "pointer",
  },
  dropdownMenu: {
    position: "absolute",
    top: "50px",
    right: 0,
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "10px 0",
    zIndex: 100,
  },
  dropdownItem: {
    display: "block",
    padding: "8px 16px",
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  logoutItem: {
    display: "block",
    padding: "8px 16px",
    textDecoration: "none",
    color: "red",
    fontWeight: "bold",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};

export default NavbarTwo;
