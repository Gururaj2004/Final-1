import React , { useState } from 'react';
import '../components/home1.css';
import Blacklogo from '../assets/Blacklogo.png';
import doctor from '../assets/doctor.png';
import user from '../assets/user.png';
import Android from '../assets/Android.png';
import doc from '../assets/doc.jpg';

function button()
{
  const backgroundColor = 'lightblue';
  const text = 'black';
  const font = '12px';

  const divstyle={
    backgroundColor,color: text,font
  };
}
const Home1 = () => {
  const [docVisible, setDocVisible] = useState(true);
  const [userVisible, setUserVisible] = useState(true);

  const toggleDocVisibility = () => {
    setDocVisible(!docVisible);
  };

  const toggleUserVisibility = () => {
    setUserVisible(!userVisible);
  };
  return (
    <div>
      <div className='background'>
        <img src={doc} alt="background image" />
      </div>
      <div className='logo'>
        <img src={Blacklogo} alt='logo'></img>
      </div>
      <div className='doc'>
       
      </div>
      {/* <div className='home-logo'>
        <img src={android} style={{width:'100px'}} alt='home'></img>
      </div> */}
      <div className='signup'>
      <div className='user mb-16'>
      <a href="/Doctorloginpage"><img src={doctor} className='h-[120px]'  alt='doc'></img></a>
      <a href="/Doctorloginpage"><button class="bg-blue-500 text-black text-sm p-2 px-4 rounded-lg mt-[15px] ml-6" onClick={toggleDocVisibility}>Doctor</button></a>
      </div>
      <div className='guardian mb-16'>
      <a href="/Loginpage"><img src={user} className='h-[120px]' alt='user'></img></a>
      <a href="/Loginpage"><button class="bg-blue-500 text-black text-sm p-2 px-4 rounded-lg mt-[15px] ml-4"  onClick={toggleUserVisibility}>Guardian</button></a>
      </div>
      {/* </div> */}
      {/* <div className='doc-button'> */}
      {/* <button onClick={toggleDocVisibility}>Doctor</button> */}
      </div>
      <div className='user-button'>
      </div>
      </div>
  );
};

export default Home1;