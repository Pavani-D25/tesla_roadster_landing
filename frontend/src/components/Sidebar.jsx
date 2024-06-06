import React from 'react';
import { MdClose } from 'react-icons/md';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="close-btn" onClick={toggleSidebar}>
        <MdClose />
      </div>
      <div className="navbar-menu">
        <ul>
          <li><a href="#">Model S</a></li>
          <li><a href="#">Model 3</a></li>
          <li><a href="#">Model X</a></li>
          <li><a href="#">Model Y</a></li>
          <li><a href="#">Solar Roof</a></li>
          <li><a href="#">Solar Panels</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">Test Drive</a></li>
          <li><a href="#">Insurance</a></li>
          <li><a href="#">Powerwall</a></li>
          <li><a href="#">Commercial Energy</a></li>
          <li><a href="#">Utilities</a></li>
          <li><a href="#">Charging</a></li>
          <li><a href="#">Find Us</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </div>
      <div className="sidebar-backdrop" onClick={toggleSidebar}></div>
    </div>
  );
};

export default Sidebar;
