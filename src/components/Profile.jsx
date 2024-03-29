import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import {Link,useNavigate} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';


import { Button } from '.';
import { userProfileData } from '../dummy_data/dummy';
import { useStateContext } from '../context/ContextProvider';
import avatar from '../dummy_data/avatar.jpg'

const Profile = () => {
  const navigate = useNavigate();
  

  

  const { currentColor } = useStateContext();
  
  let handleClick = async () => {
    try {
      signOut(auth).then(() => {
        navigate('/');
        console.log('signed out');
      });
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
    <div className="flex justify-between items-center">
      <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
      <Button
        icon={<MdOutlineCancel />}
        color="rgb(153, 171, 180)"
        bgHoverColor="light-gray"
        size="2xl"
        borderRadius="50%"
      />
    </div>
    <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
      <img
        className="rounded-full h-24 w-24"
        src={avatar}
        alt="user-profile"
      />
      <div>
        <p className="font-semibold text-xl dark:text-gray-200"> Admin One </p>
        <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
        <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"></p>
      </div>
    </div>
   {/*
     <div>
      {userProfileData.map((item, index) => (
        <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
          <button
            type="button"
            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            className=" text-xl rounded-lg p-3 hover:bg-light-gray"
          >
            {item.icon}
          </button>

          <div>
            <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
            <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
          </div>
        </div>
      ))}
    </div>
   */}
    <div className="mt-5 flex gap-2">
     <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClick}>Log Out</button>
     <Link to="/signin"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Change Password</button></Link>
    </div>
  </div>
  )
}

export default Profile