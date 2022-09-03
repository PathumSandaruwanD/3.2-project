import React,{useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import {BsChatLeft} from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avataricon from '../dummy_data/avatar.jpg';
import {Cart,Chat,Notification,Profile} from '.';
import { useStateContext } from '../context/ContextProvider';




//for navigation bar buttons
const NavButton = ({title,customerFunction,icon,color,dotColor})=>(
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={customerFunction} style={{color}} className=" relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 top-2"/ >
        {icon}
    </button>
  </TooltipComponent>
)   

const Navbar = () => {  
  //initialize state
  const {activeMenu, setActiveMenu, isClicked, setIsClicked,handleClick,screenSize, setScreenSize}=useStateContext()
  
  //set callback function to handle screen sizes
  //second parameter is dependency array=> when is going to call
  //if we blank [] it will call only in the start
  //[screenSize] => this will call every times screen size change 
  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth); 
  
     window.addEventListener('resize',handleResize);   
     handleResize();
      //remove event listener
     return () => window.removeEventListener('resize', handleResize);
  }, []);

  //track the change of screen sizes
  useEffect(()=>{
    //for screens <=900
    if(screenSize<=900){
      setActiveMenu(false);
    }
    //for screens >900
    else{
      setActiveMenu(true);
    }
  },[screenSize])
  return (
    /*First nav button
    for open and close side menu*/
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customerFunction={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color="blue" icon={<AiOutlineMenu />}/>
      {/*Shopping cart icon*/}
      <div className="flex">
        
        {/*Chat icon*/}
        <NavButton title="Chat" color="blue" dotColor="green" icon={<BsChatLeft/>}
         customerFunction={()=>handleClick('chat')}/>
          {/*Notification icon*/}
          <NavButton title="Notification" color="blue" dotColor="green" icon={<RiNotification3Line/>}
         customerFunction={()=>handleClick('notification')}/>
          {/*Profile icon and widgets*/}
          <TooltipComponent content="Profile" position="BottomCenter">
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
              onClick={()=>handleClick('profile')}>
                <img src={avataricon} className="rounded-full w-8 h-8"/>
                <p>
                  <span className="text-gray-400 text-14">Hi</span>{' '}
                  <span className="text-gray-400 text-14f font-bold ml-1">Admin</span>
                </p>
                <MdKeyboardArrowDown className="text-gray-400 text-14"/>
            </div>
          </TooltipComponent>
          {/*
            Rendering widgets based on the active menu
            if there is some problem in navbar widgets routing here is the place to fix it
          */}
          {isClicked.cart && <Cart/>}
          {isClicked.chat && <Chat/>}
          {isClicked.notification && <Notification/>}
          {isClicked.profile && <Profile/>}
      </div>
    </div>
    
  )
}

export default Navbar