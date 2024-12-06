import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const SidebarAdmin = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar Toggle Button */}
      <button style={styles.toggleButton} onClick={toggleSidebar}>
        {isOpen ? <FaTimes style={styles.icon} /> : <FaBars style={styles.icon} />}
      </button>

      {/* Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <nav style={styles.sidebarNav}>
          <a href="/admin/home" style={styles.navLink}>
            Home
          </a>
          <a href="#services" style={styles.navLink}>
            Services
          </a>
          <a href="#about-us" style={styles.navLink}>
            About Us
          </a>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

const styles = {
  toggleButton: {
    position: "fixed",
    top: "20px",
    left: "20px",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 1100,
  },
  icon: {
    color: "#fff",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "250px",
    backgroundColor: "#1F305E",
    color: "#fff",
    padding: "20px",
    boxSizing: "border-box",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
    zIndex: 1050,
  },
  sidebarNav: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "50px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "color 0.3s",
  },
};

export default SidebarAdmin;
