import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { CheckIcon } from 'lucide-react';


const areOverlapping = (a, b) => {
    dayjs.extend(customParseFormat)
    {/*
        const aStart1 = dayjs('a.Start)time', 'HH:mm a')
        console.log(aStart1); 
    */}
    const format = 'h:mm A';
    const aStart = dayjs(a.Start_time, format);
    const endtimeofA = dayjs(a.End_time, format);
    const bStart = dayjs(b.Start_time, format);
    const endtimeofB = dayjs(b.End_time, format);

    return aStart.isBefore(endtimeofB) && bStart.isBefore(endtimeofA);
};

const EventNotification = ({ events, today }) => {
    const todayevent = events.filter(e => e.date === today.format('YYYY-MM-DD'));
    const n = today.length


    let conflicts = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < todaysEvents.length; j++) {
            if (areOverlapping(todayevent[i], todayevent[j])) {
                conflicts.push([todayevent[i], todayevent[j]]);
            }
        }
    }
    const conflictLength = conflicts.length;

    return (
        <div className="bg-white rounded-md shadow p-4 mb-6 border border-gray-200">

            <h3 className="text-lg font-bold mb-2">Today's Plan</h3>
            {conflicts.length > 0 ? (
                <div className="text-red-600 space-y-2">
                    <p className="font-semibold">Conflicting Events Found:</p>
                    {conflicts.map(([a, b], idx) => (
                        <div key={idx}>
                            <p>-Your {a.title} Is around the same Time of {b.title}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className=''>
                    <p className="text-green-700 font-semibold flex">
                        <CheckIcon size={20} className='mr-3 mt-0.5'/>  No Conflicts Today</p>
                    {todayevent.map((event, idx) => (
                        <div key={idx} className="text-sm mt-1">
                            <span className="font-medium">{event.title}</span> ({event.Start_time} - {event.End_time})
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EventNotification;

