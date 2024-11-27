import React from 'react';

const Header = () => {
  return (
    <Header style={styles.header}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Support Desk</h1>

        {/* Navigation Section */}
        <nav>
          <div style={styles.rightSection}>
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search..."
              style={styles.searchBar}
            />

            {/* Login Button */}
            <button style={styles.loginButton}>Login</button>
          </div>
        </nav>
      </div>
    </Header>
  );
};

const styles = {
  header: {
    position: 'fixed', // Fix the header at the top
    top: 0,
    left: 0,
    backgroundColor: '#4682B4', // Dark background for the header
    color: '#fff', // White text color
    padding: '20px 30px', // Space around the header
    width: '100%', // Full width of the navigation bar
    boxSizing: 'border-box', // Include padding in width/height calculations
    zIndex: 1000, // Ensure the header stays above other elements
  },
  container: {
    width: '100%', // Full width of the container
    maxWidth: '1200px', // Set a max width for better responsiveness
    margin: '0 auto', // Center the container horizontally
    display: 'flex',
    justifyContent: 'space-between', // Space between title and nav section
    alignItems: 'center', // Vertically align elements in the container
  },
  title: {
    margin: 0, // Remove default margin
    fontSize: '24px', // Large font size for the title
    fontWeight: 'bold', // Make the title bold
  },
  navList: {
    display: 'flex', // Arrange list items in a row
    listStyleType: 'none', // Remove bullet points
    padding: 0, // Remove padding
    margin: '10px 0 0', // Add margin for spacing
  },
  navItem: {
    margin: '0 10px', // Space between navigation items
  },
  navLink: {
    color: '#fff', // White link text color
    textDecoration: 'none', // Remove underline
  },
  loginButton: {
    backgroundColor: '#0056b3', // Blue background color
    color: '#fff', // White text color
    border: 'none', // Remove border
    padding: '10px 20px', // Add space around the button
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Pointer cursor on hover
    fontSize: '16px', // Medium font size
  },
  rightSection: {
    display: 'flex', // Arrange search bar and button in a row
    alignItems: 'center', // Vertically align items
    justifyContent: 'flex-end', // Align items to the right
    width: 'auto', // Allow only required space
  },
  searchBar: {
    padding: '6px', // Add padding inside the input
    borderRadius: '5px', // Rounded corners
    border: '1px solid #ccc', // Light gray border
    marginRight: '20px', // Space between search bar and button
    fontSize: '14px', // Smaller font size for search bar
    width: '300px', // Set search bar width
  },
};

export default Header;
