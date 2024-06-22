import React from 'react';
import "./Navbar.css";
import profileImage from "../../assets/user.png"
import settingimg from "../../assets/setting.png";
import notificationicon from "../../assets/bell.png";
const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 className="navbar-title">Navbar</h2>
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>
        <div className="profile">
          <select className='selectmenu'>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <img src={notificationicon} alt="notification" className='notification-image' />
          <img src={settingimg} alt="settings" className='setting-image' />
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
