import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
    
        <p style={styles.text}>© 2024 Support Desk. All rights reserved.</p>
        
       
        <div style={styles.links}>
          <a href="/privacy" style={styles.link}>
            Privacy Policy
          </a>
          <a href="/terms" style={styles.link}>
            Terms of Service
          </a>
          <a href="/contact" style={styles.link}>
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#5072A7', // Match header background color
    color: '#fff', // White text color
    padding: '20px 30px', // Space around the footer
    width: '100%', // Full width of the footer
    position: 'fixed', // Stick to the bottom of the page
    bottom: 0,
    left: 0,
    boxSizing: 'border-box', // Include padding in width/height calculations
    textAlign: 'center', // Center-align text
    zIndex: 1000, // Ensure footer stays above other elements
  },
  container: {
    maxWidth: '1200px', // Set a max width for responsiveness
    margin: '0 auto', // Center the container horizontally
    display: 'flex', // Flexbox for layout
    justifyContent: 'space-between', // Space out the text and links
    alignItems: 'center', // Center-align items vertically
    flexWrap: 'wrap', // Allow wrapping on smaller screens
  },
  text: {
    margin: 0, // Remove default margin
    fontSize: '14px', // Smaller font for footer text
  },
  links: {
    display: 'flex', // Arrange links in a row
    gap: '15px', // Add space between links
  },
  link: {
    color: '#fff', // White link text color
    textDecoration: 'none', // Remove underline
    fontSize: '14px', // Smaller font size for links
    transition: 'color 0.3s', // Smooth transition for hover effect
  },
  linkHover: {
    color: '#cce7ff', // Slightly lighter on hover
  },
};

export default Footer;
