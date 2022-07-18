import React ,{useEffect} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

//Charts of the components file has been removed for temporary

import { Sidebar,Navbar,Footer,ThemeSettings } from './components';

//Import pages
import{Calender,ColorPicker,Ecommrce,Editor,Employees,Inventory,Kanban,Orders,PriceBook,Users,Area,Bar,ColorMapping,FinancialChart,Line,Pie,Pyramid,Stacked}from './pages';
//import state controllers and context provider
import { useStateContext } from './context/ContextProvider';


import './App.css'

const App = () => {
  const{activeMenu}=useStateContext();

  //css framework=> tailwindcss

  return (
    <div>
      <BrowserRouter>
      {/*sidebar*/}
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'>
              <button type='button' className='text-3xl p3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'blue',borderRadius:'50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
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
                {/*Dashboard*/}
                <Route path='/' element={< Ecommrce/>} />
                <Route path='/ecommrce' element={< Ecommrce/>} />

                {/*Pages*/}
                <Route path='/orders' element={< Orders/>} />
                <Route path='/employees' element={< Employees/>} />
                <Route path='/users' element={< Users/>} />
           
                {/*Apps*/}
                <Route path='/kanban' element={< Kanban/>} />
                <Route path='/editor' element={< Editor/>} />
                <Route path='/calender' element={< Calender/>} />
                <Route path='/color-picker' element={< ColorPicker/>} />

                {/*Charts*/}
                <Route path='/line' element={< Line/>} />
                <Route path='/area' element={< Area/>} />
                <Route path='/bar' element={< Bar/>} />
                <Route path='/pie' element={< Pie/>} />
                <Route path='/financial-chart' element={< FinancialChart/>} />
                <Route path='/color-mapping' element={< ColorMapping/>} />
                <Route path='/pyramid' element={< Pyramid/>} />
                <Route path='/stacked' element={< Stacked/>} />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App