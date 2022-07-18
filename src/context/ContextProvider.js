//use for manage the state of the navbar

import React,{createContext,useContext,useState} from 'react';

const StateContext = createContext();
//create initial state for navbar in following object

const InitialState ={
    chat : false,
    chart: false,
    profile: false,
    notification : false,
}
export const ContextProvider = ({children})=>{
    const [activeMenu,setActiveMenu]= useState(true);
// create context provider
    return(
       <StateContext.Provider value={{activeMenu,setActiveMenu}}>
        {/*render children*/}
        {children}
       </StateContext.Provider> 
    )
} 

//to use above activeMenu export it like bellow 
export const useStateContext =()=>useContext(StateContext);
