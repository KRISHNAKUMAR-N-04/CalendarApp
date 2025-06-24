import React from 'react';
import { Bell, UserRoundIcon, Search } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 md:left-64 z-40 bg-white shadow h-16 flex items-center px-6 justify-between pl-15 pr-15">
      <div className="flex items-center bg-gray-200 rounded px-3 py-1 w-full max-w-md">
        <Search size={15} className="text-gray-600" />
        <input
          type="text"
          placeholder="Search for events"
          className="ml-2 w-full bg-transparent border-none focus:outline-none text-sm"
        />
      </div>
      <div className="flex items-center space-x-6">
        <Bell size={20} className="text-gray-600" />
        <div className="flex items-center bg-blue-600 hover:bg-sky-400 text-white px-4 py-1 rounded-xl cursor-pointer">
          <UserRoundIcon size={20} className="mr-2" />
          <p>User</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
