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

//useState for manage the state of the navbar
//set isClicked to initial state where all the menu is closed
const [isClicked, setIsClicked] = useState(InitialState);

//state to handle screen sizes in different screen sizes
const [screenSize, setScreenSize] = useState(undefined)

//handleClick function for manage the state of the navbar
const handleClick =(clicked)=>{
    //clicked is a object. therefore we cant use setIsClicked(clicked). so we need to spread the object
    setIsClicked({...InitialState, [clicked]:true})    
}

// create context provider
    return(
       <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked, setIsClicked,handleClick,screenSize, setScreenSize}}>
        {/*render children*/}
        {children}
       </StateContext.Provider> 
    )
} 

//to use above activeMenu export it like bellow 
export const useStateContext =()=>useContext(StateContext);
