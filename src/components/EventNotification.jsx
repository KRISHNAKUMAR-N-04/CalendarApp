import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { CheckIcon, FileWarningIcon } from 'lucide-react';


const areOverlapping = (a, b) => {
    dayjs.extend(customParseFormat);
    {/*
        const aStart1 = dayjs('a.Start)time', 'HH:mm a')
        console.log(aStart1); 
    */}

    const format = 'h:mm A';
    const aStart = dayjs(a.Start_time, format);
    const aEnd = dayjs(a.End_time, format);
    const bStart = dayjs(b.Start_time, format);
    const bEnd = dayjs(b.End_time, format);

    console.log((aStart.isBefore(bEnd) && bStart.isBefore(aEnd)))
    return aStart.isBefore(bEnd) && bStart.isBefore(aEnd);

};



const date = dayjs().format("DD");
const month = dayjs().format("MMMM")
const year = dayjs().format("YYYY")

const EventNotification = ({ events, today }) => {
    const todayevent = events.filter(e => e.date === today.format('YYYY-MM-DD'));
    const n = todayevent.length


    let conflicts = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (areOverlapping(todayevent[i], todayevent[j])) {
                conflicts.push([todayevent[i], todayevent[j]]);
            }
        }
    }

    return (
        <div className="bg-amber-50 rounded-md max-h-fit shadow-xl md:max-w-xs pl-4 pr-4 pb-5 ">

            <div className=' p-5 bg-orange-400 rounded-b-lg  pt-40 shadow-lg' >
                <p className=' text-blue-900 font-extrabold text-9xl '>{date}</p>
                <p>{month}, {year}</p>


            </div>

            {conflicts.length > 0 ? (
                <div className="space-y-2  ">
                    <div className='ml-3 '>
                        <p className="text-red-700 font-semibold flex mt-10">
                            <FileWarningIcon size={20} className='mr-3 ' />Conflicting Events Found:</p>
                        {conflicts.map(([a, b], idx) => (
                            <div key={idx}>
                                <p className='text-red-500 italic font-light'>-Your {a.title} Is around the same Time of {b.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className='bg-gray-600 text-white pl-3 pr-3 rounded-lg  drop-shadow-xs '>
                        <h3 className="text-lg font-bold pt-6">Today's Plan</h3>

                        {todayevent.map((event, idx) => (
                            <div key={idx} className="text-sm mt-1">
                                <span className="font-medium">{event.title}</span> ({event.Start_time} - {event.End_time})
                            </div>
                        ))}
                    </div>

                </div>
            ) : (
                <>
                    <div className='mt-25 '>
                        <p className="text-green-700 font-semibold flex">
                            <CheckIcon size={20} className='mr-3 ' />The Day is Clear.</p>
                    </div>

                    <div className=' bg-gray-600 text-white pl-3 pr-3 lg:mt-6 rounded-lg pb-5  drop-shadow-xs mb-5'>


                        <h3 className="text-lg font-bold mb-3  pt-6 ">Today's Plan</h3>

                        {todayevent.length > 0 ?
                            (
                                <div>
                                    {todayevent.map((event, idx) => (

                                        <div key={idx} className="text-sm ">
                                            <span className="font-medium ">{event.title}</span> ({event.Start_time} - {event.End_time})
                                        </div>

                                    ))}
                                </div>
                            ) : (
                                <div className='text-sm font-light text-sky-300'>No events today.</div>
                            )
                        }


                        {/*} { todayevent.map((event, idx) => (
                                
                            <div key={idx} className="text-sm mt-1">
                                <span className="font-medium ">{event.title}</span> ({event.Start_time} - {event.End_time})
                            </div>
                              
                        ))}*/}
                    </div>
                </>

            )}
        </div>
    );
};

export default EventNotification;

