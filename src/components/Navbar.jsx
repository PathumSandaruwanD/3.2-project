import React,{useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import {BsChatLeft} from 'react-icons/bs';
import {RiNotification2} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avataricon from '../dummy_data/avatar.jpg';
import {Cart,Chat,Notification,UserProfile} from '.';
import { useStateContext } from '../context/ContextProvider';

const NavButton=({title,customerFunction,icon,color,dotColor})=>(
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button'>

    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu,setActiveMenu} = useStateContext();

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customerFunction={()=>
        setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color="blue" icon={AiOutlineMenu}/>
    </div>
  )
}

export default Navbar