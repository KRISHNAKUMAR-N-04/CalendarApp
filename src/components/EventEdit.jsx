import React from 'react'
import { MoveLeftIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const EventEdit = () => {

  const navigate = useNavigate();


  return (
    <div className='bg-gray-100 min-h-screen ' >
      <button
            className="bg-gray-200 rounded px-4 py-2 m-4 cursor-pointer"
            onClick={()=>navigate('/calendar')}
          >
            <MoveLeftIcon size={20}/>
          </button>
      <p className='pt-4 pl-6 pr-4 text-3xl font-medium'>Add Events</p>
      <p className='font-extralight italic text-red-400 text-sm pl-6'>* Note: The following fields are required to add an event to your calendar</p>
      <div className='ml-20 mt-10 w-fit p-10 rounded bg-gray-200 ' >
        <p>Title: <span className='pl-26'><input type='text' className='pl-3 bg-gray-200  border-b-2 border-dashed focus:bg-white focus:text-black ' width={24}  placeholder='Enter title'></input></span></p>
        <p className='pt-5'>Date: <span className='pl-25'><input type='text' className='pl-3 bg-gray-200  border-b-2 border-dashed' width={24}  placeholder='Enter date'></input></span></p>
        <p className='pt-5'>Start Time: <span className='pl-16'><input type='text' className='pl-3 bg-gray-200  border-b-2 border-dashed' width={24}  placeholder='Enter Start Time'></input></span></p>
        <p className='pt-5'>End Time: <span className='pl-18'><input type='text' className='pl-3 bg-gray-200  border-b-2 border-dashed' width={24}  placeholder='Enter End Time'></input></span></p>
        <p className='pt-5'>Color: <span className='pl-24'><input type='text' className='pl-3 bg-gray-200  border-b-2 border-dashed' width={24}  placeholder='Enter color code'></input></span></p>
      </div>
    </div>
  )
}

export default EventEdit
