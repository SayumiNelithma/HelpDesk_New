import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const SidebarApprover = () => {
  return (
    <div style={styles.sidebar}>
      <nav style={styles.sidebarNav}>
        <a href="/approver/home" style={styles.navLink}>
          Home
        </a>
        <a href="" style={styles.navLink}>
          IT Issues
        </a>
        <a href="" style={styles.navLink}>
          Software Installation
        </a>
        <a href="" style={styles.navLink}>
          Password Reset
        </a>
        <a href="" style={styles.navLink}>
          Hardware Issues
        </a>
        <a href="" style={styles.navLink}>
          Service Access Requests
        </a>
        <a href="" style={styles.navLink}>
          Bug Reports
        </a>
        <a href="" style={styles.navLink}>
          Feature Requests
        </a>
        <a href="" style={styles.navLink}>
          Feedbacks or Suggestions
        </a>
        <a href="" style={styles.navLink}>
          Other
        </a>
      </nav>
    </div>
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
    zIndex: 1200, // Sidebar toggle button remains above other content
  },
  icon: {
    color: "#fff",
  },
  sidebar: {
    position: "fixed",
    top: "80px",
    left: 0,
    height: "calc(100% - 80px)",
    width: "250px",
    backgroundColor: "#00416A",
    color: "#fff",
    padding: "20px",
    boxSizing: "border-box",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
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

export default SidebarApprover;
