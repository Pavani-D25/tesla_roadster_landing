import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <a href="#">
          <img src={logo} className="brand" alt="Logo" />
        </a>
        <ul>
          <li><a href="#">Model S</a></li>
          <li><a href="#">Model 3</a></li>
          <li><a href="#">Model X</a></li>
          <li><a href="#">Model Y</a></li>
          <li><a href="#">Solar Roof</a></li>
          <li><a href="#">Solar Panels</a></li>
        </ul>
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Account</a></li>
          <li><span className="menu-btn" onClick={toggleSidebar}>Menu</span></li>
        </ul>
        <span className="menu-btn-mobile" onClick={toggleSidebar}>Menu</span>
      </nav>
    </header>
  );
};

export default Header;
