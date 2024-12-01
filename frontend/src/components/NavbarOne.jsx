import React from "react";
import { FaUserCircle } from "react-icons/fa";

const NavbarOne = ({ isSidebarOpen }) => {
  return (
    <header
      style={{
        ...styles.header,
        transform: isSidebarOpen ? "translateX(250px)" : "translateX(0)",
      }}
    >
      <div style={styles.container}>
        <h1 style={styles.title}>Support Desk</h1>
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

export default NavbarOne;
