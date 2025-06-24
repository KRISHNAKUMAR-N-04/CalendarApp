import React from 'react';
import { Bell, UserRoundIcon, Search } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 md:left-64  z-40 bg-gray-300/40 backdrop-blur-lg shadow h-16 flex items-center px-6 justify-evenly lg:pl-15 lg:pr-15">
      <div className="flex items-center bg-amber-50  text-white rounded px-3 py-1 w-full max-w-md justify-start">
        <Search size={15} className="text-gray-600" />
        <input
          type="text"
          placeholder="Search for events"
          className="ml-2 w-full bg-transparent border-none focus:outline-none text-sm text-gray-600"
        />
      </div>
      <div className="flex items-center space-x-6">
        <Bell size={20} className="text-white hover:fill-zinc-950 mr-10  cursor-pointer" />
        <div className=" bg-blue-600 mr-2 hover:bg-gray-400 transition transition-color duration-200 text-white rounded-full p-1 cursor-pointer">
          <UserRoundIcon size={20} className="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
