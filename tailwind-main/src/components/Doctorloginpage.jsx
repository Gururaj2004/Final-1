import React from 'react';
import nurse from '../assets/nurse.jpg'
import { Link } from 'react-router-dom';

export default function Doctorloginpage(){
    return(
        <div>
            <div className='w-full h-screen flex'>
          <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-blue-300 sm:max-w-[900px]'>
          <div className='w-full h-[550px] hidden md:block'>
              <img className='w-full h-full' src={nurse} alt="/" />
          </div>
            <div className='p-4 flex flex-col justify-around'>
              <form className=' mt-5'>
                <h2 className='text-4xl font-bold text-center mb-11 text-gray-600'>@Home.com!</h2>
                <div>
                    <input className='border p-2 mr-2 mb-6 w-80 ml-10' type="text" placeholder='Doctor Name' name='DoctorName'/>
                </div>
                <div>
                    <input className='border p-2 mr-2 mb-6 w-80 ml-10' type="number" placeholder='Doctor ID' name='DoctorID'/>
                </div>
                <div>
                  <input className='border p-2 mb-4 w-80 ml-10 ' type="Password" placeholder='Password' name='Password'/>
                </div>
                <button className='w-80 ml-10 py-2 my-4 bg-green-600 hover:bg-yellow-500 mt-6'>Login</button>
                <br/>
              </form>
             </div>
          </div>
        </div>
        </div>
    );
}