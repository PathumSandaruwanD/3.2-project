import React from 'react'
import { Link, NavLink } from 'react-router-dom';

//import icons
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {links} from '../dummy_data/dummy'; 
import { itemMove } from '@syncfusion/ej2/treemap';

//importing context from the context file
import { useStateContext } from '../context/ContextProvider'; 

const Sidebar = () => {
  const { activeMenu,setActiveMenu,screenSize,color }= useStateContext();

  const handleCloseSideBar =()=>{
    if(activeMenu && screenSize <=900){
      setActiveMenu(false);
    }
  }

  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink= "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          {/*set active menu*/}
          <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight
          dark:text-white text-slate-900">
            <SiShopware /><span>Muthuhetti Wine Stores</span>
          </Link>
          {/*Setting a callback function to toggle the button by using parameter => prevActiveMenu*/}
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button type='button' onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        {/*Importing links from the */}
        <div className='mt-10'>
          {links.map((item)=>(
            <div key={item.title}>
              <p className='text-gray-400 m3 mt-4 uppercase'>
                {item.title}
              </p>
              {/*Looping all the links*/}
              {item.links.map((link)=>(
                <NavLink 
                to={`/${link.name}`}
                key={link.name}
                onClick={handleCloseSideBar}
                //bug is here
                style={({isActive})=>({
                  backgroundColor:"gray-400"
                })
              }
                className={({isActive})=>isActive? activeLink: normalLink}>
                  {link.icon}
                  <span className='capitalized'>
                    {link.name} 
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar