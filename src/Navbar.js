import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1> Rami Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create"  style={{  color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
          }}> New blog</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
