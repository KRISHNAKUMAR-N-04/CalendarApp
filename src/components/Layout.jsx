import React from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pl-64">
        <Topbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
