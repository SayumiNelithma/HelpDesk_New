import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = ({ isSidebarOpen }) => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          <a href="/admin/home" style={{ textDecoration: "none", color: "inherit" }}>
            Support Desk
          </a>
        </h1>

        <div style={styles.rightSection}>
          <Link to="/login">
            <button className="bg-[#3258a3] text-white font-semibold hover:bg-sky-600 px-6 py-3 rounded-sm">
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
    zIndex: 1100, // Navbar stays on top
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
  rightSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
};

export default NavbarAdmin;
