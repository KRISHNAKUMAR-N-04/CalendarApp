import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Calendar, Menu, LayoutDashboardIcon, ActivityIcon } from 'lucide-react';
import logo from '../assets/1869397.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden flex justify-between items-center bg-white px-4 py-3 shadow fixed w-full z-50">
        <h1 className="text-xl font-semibold text-gray-800">Calendar</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
          <Menu size={24} />
        </button>
      </div>

      <nav
        className={`${
          isOpen ? 'block pt-15' : 'hidden'
        } lg:block fixed top-0 left-0 w-64 h-full bg-amber-50 backdrop-blur-2xl backdrop-opacity-50 shadow-lg z-40 transition-all duration-300 ease-in-out bg-gradient-to-r from-white to-gray-300`}>

          
        <div className="flex items-center text-2xl font-extralight text-gray-800 mb-6 p-6">
          <img src={logo} className="w-8 h-8 object-contain" alt="Logo" />
          <p className="pl-3">Calendar</p>
        </div>

        <div>
          <div className="font-extralight text-xs text-sky-500 uppercase tracking-wider pl-6 mb-2">Menu</div>

          <ul>

            <li className="pl-6 py-3 hover:bg-blue-500 text-gray-600 hover:text-white transition-colors duration-200">
              <Link
                to="/"
                className="flex items-center  w-full"
              >
                <Calendar size={20} />
                <p className="font-medium pl-3">Your Calendar</p>
              </Link>
            </li>
            <li className="pl-6 py-3 hover:bg-blue-500 text-gray-600 hover:text-white transition-colors duration-200">
              <Link
                to="/"
                className="flex items-center   w-full"
              >
                <LayoutDashboardIcon size={20} />
                <p className="font-medium pl-3">Dashboard</p>
              </Link>
            </li>
            <li className="pl-6 py-3 hover:bg-blue-500 text-gray-600 hover:text-white transition-colors duration-200">
              <Link
                to="/"
                className="flex items-center  w-full"
              >
                <ActivityIcon size={20} />
                <p className="font-medium pl-3">Events</p>
              </Link>
            </li>
            <li className="pl-6 py-3 hover:bg-blue-500 text-gray-600 hover:text-white transition-colors duration-200">
              <Link
                to="/"
                className="flex items-center  w-full"
              >
                <Calendar size={20} />
                <p className="font-medium pl-3">Your Calendar</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
