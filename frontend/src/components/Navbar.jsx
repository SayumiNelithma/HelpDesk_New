import React from "react";
import { FaUserCircle } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        
        <h1 style={styles.title}>Support Desk</h1>

        
        <nav style={styles.navList}>
          <a href="#home" style={styles.navLink}>
            Home
          </a>
          <a href="#services" style={styles.navLink}>
            Services
          </a>
          <a href="#about-us" style={styles.navLink}>
            About Us
          </a>
        </nav>

        {/* Profile Icon */}
        <div style={styles.rightSection}>
          <FaUserCircle style={styles.profileIcon} />
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
    backgroundColor: "#5072A7",
    color: "#fff",
    padding: "20px 30px",
    width: "100%",
    boxSizing: "border-box",
    zIndex: 1000,
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
  },
  navList: {
    display: "flex",
    gap: "40px",
    marginLeft: "500px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "color 0.3s",
  },
  navLinkHover: {
    color: "#cce7ff", // Lighter color on hover
  },
  profileIcon: {
    fontSize: "30px", // Size of the user profile icon
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
};

export default Navbar;
