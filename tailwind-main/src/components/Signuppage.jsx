import React from 'react';
import { Link } from 'react-router-dom';
import patientmeetingdoctor from '../assets/patientmeetingdoctor.webp'

export default function Loginpage() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-green-300 sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
          {/* Add your login page image here */}
          <img className='w-500 h-500 mt-32 ml-3' src={patientmeetingdoctor} alt="/" />
        </div>
        <div className='p-4 flex flex-col justify-around'>
          <form className='mt-12 ml-3'>
            <h2 className='text-4xl font-bold text-center mb-8 -mt-1 text-gray-600'>@Home.com!</h2>
            <div>
              <input className='border p-2 mr-2 mb-4 w-80 ml-2' type="text" placeholder="Username" name='Username' />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="password" placeholder='Password' name='Password' />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="password" placeholder='Password' name='Password' />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="password" placeholder='Password' name='Password' />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="password" placeholder='Password' name='Password' />
            </div>
            <div>
              <input className='border p-2 mb-4 w-80 ml-2' type="password" placeholder='Password' name='Password' />
            </div>
          </form>
          <Link to='/Signuppage1'>
            <div className='ml-60 mt-0.5'>
              <button className="bg-yellow-400 hover:bg-gray-400 text-green py-0.15 px-4 rounded-full w-25 text-sm">Next</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
