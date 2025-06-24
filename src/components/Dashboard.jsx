import { Search, Bell, User2Icon } from 'lucide-react';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Topbar from './Topbar';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  const getOrdinal = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const ordinal = getOrdinal(day);
    const month = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(date);
    const year = date.getFullYear();
    return `${day}${ordinal} ${month}, ${year}`;
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      
      <div className="pt-16 md:pl-18 px-4 md:px-12 py-6 bg-gray-100">
        <p className="text-black font-bold text-2xl mb-6">
          Today <br />
          <span className="font-semibold">{formatDate(new Date())}</span>
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Your Schedule</h2>
            <div className="p-4 bg-green-100 text-green-700 rounded-md">
              🎉 Your calendar is clear today. Enjoy your day!
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Calendar</h2>
            <Calendar onChange={setDate} value={date} className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
