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
    <div className="bg-gray-100 min-h-screen p-4 font-quicksand">
      <EventNotification events={events} today={today} />

      

      <div className="pt-5  max-w-6xl mx-auto">
      <div
        className="flex justify-end pt-2 md:pt-3 md:pb-3 "
      >
        <div className="flex items-center bg-gray-900 hover:bg-blue-600 transition-all hover:-translate-y-1 duration-300 text-white px-4 py-1 rounded-md cursor-pointer" onClick={() => navigate('/editevent')}>
          <PlusIcon size={20} className="mr-2" />
          <p>Add Event</p>
        </div>
      </div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-gray-200 rounded px-4 py-2"
            onClick={() => setSelectedDate(selectedDate.subtract(1, 'month'))}
          >
            <MoveLeftIcon size={20} />
          </button>
          <h2 className="text-xl font-bold">
            {selectedDate.format('MMMM YYYY')}
          </h2>
          <button
            className="bg-gray-200 rounded px-4 py-2"
            onClick={() => setSelectedDate(selectedDate.add(1, 'month'))}
          >
            <MoveRightIcon size={20} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-7 text-center font-semibold mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="space-y-3">
              {calendar.map((week, weekIdx) => (
                <div key={weekIdx} className="grid grid-cols-7  gap-3">
                  {week.map((cell, idx) => (
                    <div
                      key={idx}
                      className={`border p-2 h-25 overflow-y-hidden rounded-md transition-transform duration-300 hover:-translate-y-1 ${cell.date.isSame(today, 'day')
                          ? 'bg-blue-100 border-blue-500'
                          : ''
                        }`}
                    >
                      <div className="text-sm font-bold">
                        {cell.date.date()}
                      </div>
                      {cell.events.map((e, i) => (
                        <EventCard key={i} event={e} />
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
