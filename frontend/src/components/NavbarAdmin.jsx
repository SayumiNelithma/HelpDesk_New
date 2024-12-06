import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const NavbarAdmin = ({ isSidebarOpen }) => {
  return (
    <header
      style={{
        ...styles.header,
        transform: isSidebarOpen ? "translateX(250px)" : "translateX(0)",
      }}
    >
      <div style={styles.container}>
      <h1 style={styles.title}>
          <a href="/admin/home" style={{ textDecoration: "none", color: "inherit" }}>
            Support Desk
          </a>
        </h1>
        
        <div style={styles.rightSection}>
          <Link to="/login">
            <button
              className="bg-[#3258a3] text-white font-semibold hover:bg-sky-600 px-6 py-3 rounded-sm"
              //onClick={() => setShowType("card")}
            >
              Log out
            </button>
          </Link>
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
  profileIcon: {
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
};

export default NavbarAdmin;
