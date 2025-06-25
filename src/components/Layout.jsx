import React from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-blue-950 bg-opacity-95 backdrop-blur-xl text-white">
      <Navbar />
      <div className="pt-16  transition-all duration-300">
        <Topbar />
        <main className="p-4 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
