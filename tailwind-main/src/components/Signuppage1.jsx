import React from 'react';
import patientmeetingdoctor from '../assets/patientmeetingdoctor.webp'
import pakka from '../assets/pakka.jpg';

export default function Signuppage1(){
    return (
        <div className='w-full h-screen flex'>
          <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-green-300 sm:max-w-[900px]'>
          <div className='w-full h-[550px] hidden md:block'>
              <img className='w-500 h-500 mt-32 ml-3' src={patientmeetingdoctor} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
              <form className=' mt-5 ml-4'>
                <h2 className='text-4xl font-bold text-center mb-8 -mt-1 text-gray-600'>@Home.com!</h2>
                <div>
                    <input className='border p-2 mr-2 mb-4 w-80 ml-2' type="text" placeholder="Name1" name='Name'/>
                </div>
                <div>
                    <input className='border p-2 mr-2 mb-4 w-80 ml-2' type="text" placeholder='Username1' name='Username'/>
                </div>
                <div>
                    <input className='border p-2 mr-2 mb-4 w-80 ml-2' type="text" placeholder='Gaurdian 1/ Parent Name1' name='Name'/>
                </div>
                <div>
                <input className='border p-2 mb-4 w-80 ml-2' type="text" placeholder='Date of Birt1' name='Password'/>
                </div>
                <div>
                <input className='border p-2 mb-4 w-80 ml-2' type="text" placeholder='Date of Birth1' name='Password'/>
                </div>
                <div>
                  <input className='border p-2 mb-4 w-80 ml-2' type="Password" placeholder='Password1' name='Password'/>
                </div>
             <div>
                <button className='w-80 py-2 my-4 ml-2 bg-green-600 hover:bg-yellow-500 mt-7'>Sign - Up</button>
             </div>
              </form>
              {/* <div className=' ml-60 mt-0.5'>
                <button class="bg-yellow-400 hover:bg-gray-400 text-green py-0.15 px-4 rounded-full w-25 text-sm">Next page</button>
              </div> */}
             </div>
          </div>
        </div>
      );
    }