import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from "../../assets/logo.jpg"
import stockimage from "../../assets/packages.png"
import cartimage from "../../assets/shopping-cart.png"
import saleimage from "../../assets/shopping-bag.png"
import reportimage from "../../assets/file.png"
import homeimage from "../../assets/home.png"
const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  return (
    <div className='sidebar'>
      <div className="logo-name">
        <img src={logo} alt="Company Logo" className="logo" />
        <h1 className="company-name">Inventory</h1>
      </div>

      <ul>
        <li>
          <Link to="/" onClick={() => handleSectionClick('home')}>
          <img className='homeimage' src={homeimage} alt=''/>
          Dashboard</Link>
        </li>
        <li>
          <Link to="/stock" onClick={() => handleSectionClick('stock')}>
          <img className='stockimage' src={stockimage} alt=''/>
          Stock</Link>
          {activeSection === 'stock' && (
            <ul className="sub-links">
              <li><Link to="/stock/inventory">Inventory</Link></li>
              <li><Link to="/stock/warehousing">Warehousing</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/sale" onClick={() => handleSectionClick('sale')}>
          <img className='cartimage' src={cartimage} alt=''/>
          Sales</Link>
          {activeSection === 'sale' && (
            <ul className="sub-links">
              <li><Link to="/sale/orders">Orders</Link></li>
              <li><Link to="/sale/customers">Customers</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/purchases" onClick={() => handleSectionClick('purchases')}>
          <img className='saleimage' src={saleimage} alt=''/>
          Purchases
          </Link>
          {activeSection === 'purchases' && (
            <ul className="sub-links">
              <li><Link to="/purchases/suppliers">Suppliers</Link></li>
              <li><Link to="/purchases/invoices">Invoices</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/" onClick={() => handleSectionClick('report')}>
          <img className='reportimage' src={reportimage} alt=''/>
          Report</Link>
          {activeSection === 'report' && (
            <ul className="sub-links">
              <li><Link to="/report/sale">Sale Report</Link></li>
              <li><Link to="/report/purchases">Purchase Report</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
