import React ,{useEffect} from 'react';
import { BrowserRouter, Route, Routes,Switch,Router} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

//Charts of the components file has been removed for temporary

import { EditEmp,EditForm,Sidebar,Navbar,Footer,ThemeSettings,AddProduct,SalesGrid,EditProduct,ProductTable,AddEmployees} from './components';

//Import pages
import{ColorPicker,Calender,Ecommrce,Editor,Employees,Inventory,Kanban,Orders,PriceBook,Users,Area,Bar,ColorMapping,FinancialChart,Line,Pyramid,Stacked, Sales, Login,Signin}from './pages';
//import state controllers and context provider
import { useStateContext } from './context/ContextProvider';
import './App.css'
import Customers from './pages/Customers';
import {PageLaoutRoutes} from './App';



const App = () => {
  const{activeMenu}=useStateContext();
  //hide sidebar and navbar when login page is active
 
  //css framework=> tailwindcss

  return (
    <div>
      <BrowserRouter>
      {/*sidebar*/}
        <div className='flex relative dark:bg-main-dark-bg'>
          {/*
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'>
              <button type='button' className='text-3xl p3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'blue',borderRadius:'50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          
          */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'> 
            <Sidebar />
            </div>
          ) :(
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          {/*navbar*/}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full
            ${activeMenu? 'md:ml-72'
            :'flex-2'}` 
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

            {/*routing*/}
            <div>

             

              <Routes>
                
              <Route path='/Signin' element={< Signin/>} />
              <Route path='/' element={< Login/>} />
               
                <Route path='/Online%20Store' element={< Ecommrce/>} />
                {/*Pages*/}
                <Route path='/orders' element={< Orders/>} />
                <Route path='/employees' element={< Employees/>} />
                <Route path='/customers' element={< Customers/>} />
                <Route path='/sales' element={< Sales/>} />
                {/*Apps*/}
                <Route path='/Calendar' element={< Calender/>}/>
                <Route path='/Task%20Scheduler' element={< Kanban/>} />
                <Route path='/editor' element={< Editor/>} />
                <Route path='/color-picker' element={< ColorPicker/>} />
                <Route path='/price%20book' element={< PriceBook/>} />
                <Route path='/inventory' element={< Inventory/>} />
               
               <Route path='/AddProduct' element={< AddProduct/>} />
                <Route path='/EditProduct' element={< EditProduct/>} />
                <Route path='/AddEmployees' element={< AddEmployees/>} />
                <Route path='/EditForm' element={< EditForm/>} />
                <Route path='/EditEmp' element={< EditEmp/>} />
              </Routes>
                {/*create private route to hide navbar and sidebar in login page*/}
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App