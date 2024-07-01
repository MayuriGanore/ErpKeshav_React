// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const Layout = () => {
    return (
        <div>
            <Sidebar />
            <Navbar />
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
