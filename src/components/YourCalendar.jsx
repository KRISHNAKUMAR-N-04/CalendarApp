import React, { useState } from 'react';
import dayjs from 'dayjs';
import events from '../data/events.json';
import EventCard from './Event';
import { MoveLeftIcon, MoveRightIcon, PlusIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EventNotification from './EventNotification';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const navigate = useNavigate();

  const monthStart = selectedDate.startOf('month');
  const monthEnd = selectedDate.endOf('month');
  const calendarStart = monthStart.startOf('week');
  const calendarEnd = monthEnd.endOf('week');
  const today = dayjs();

  const generateCalendar = () => {
    let currentDay = calendarStart.clone();
    const weeks = [];

    while (currentDay.isBefore(calendarEnd, 'day')) {
      const daysInWeek = [];

      for (let i = 0; i < 7; i++) {
        const eventsForDay = events.filter(e =>
          dayjs(e.date).isSame(currentDay, 'day')
        );

        daysInWeek.push({
          date: currentDay.clone(),
          events: eventsForDay
        });

        currentDay = currentDay.add(1, 'day');
      }

      weeks.push(daysInWeek);
    }

    return weeks;
  };

  const calendar = generateCalendar();

  return (
    <div className="lg:ml-64 px-2 py-4   min-h-screen">
  <div className="bg-white/20 backdrop-blur-lg p-4 font-quicksand flex flex-col lg:flex-row shadow-white rounded-lg gap-4">

    <div className="w-full lg:w-1/3">
      <EventNotification events={events} today={today} />
    </div>


    <div className="w-full bg-white/40 p-4 rounded-lg overflow-x-auto">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-3">
        <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">Calendar</p>
        <div
          className="flex items-center shadow-white bg-gray-900 hover:bg-blue-600 transition hover:-translate-y-1 duration-300 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => navigate('/editevent')}
        >
          <PlusIcon size={20} className="mr-2" />
          <p>Add Event</p>
        </div>
      </div>


      <div className="flex justify-between items-center bg-amber-50 text-black px-4 py-2 rounded-md shadow">
        <button
          className="bg-gray-200 rounded px-4 py-2"
          onClick={() => setSelectedDate(selectedDate.subtract(1, 'month'))}
        >
          <MoveLeftIcon size={20} />
        </button>
        <h2 className="text-lg md:text-xl font-bold">
          {selectedDate.format('MMMM YYYY')}
        </h2>
        <button
          className="bg-gray-200 rounded px-4 py-2"
          onClick={() => setSelectedDate(selectedDate.add(1, 'month'))}
        >
          <MoveRightIcon size={20} />
        </button>
      </div>


      <div className="overflow-x-auto mt-4 rounded-lg">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-7 bg-blue-900 text-orange-400 text-center font-semibold">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="py-2">{d}</div>
            ))}
          </div>

          <div>
            {calendar.map((week, weekIdx) => (
              <div key={weekIdx} className="grid grid-cols-7 bg-amber-50">
                {week.map((cell, idx) => {
                  const isToday = cell.date.isSame(today, 'day');
                  const isCurrentMonth = cell.date.isSame(selectedDate, 'month');

                  return (
                    <div
                      key={idx}
                      className={`border border-gray-300 p-2 h-24 sm:h-28 md:h-32 overflow-y-auto text-sm transition-transform duration-300 hover:-translate-y-1 
                      ${isToday ? 'bg-orange-100 border-orange-500 rounded-md' : ''} 
                      ${isCurrentMonth ? 'text-black' : 'bg-gray-500/50 text-white'}`}
                    >
                      <div className="font-bold mb-1">
                        {cell.date.date()}
                      </div>
                      {cell.events.map((e, i) => (
                        <EventCard key={i} event={e} />
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Calendar;
