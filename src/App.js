import React ,{useEffect} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { FieldSettings } from '@syncfusion/ej2-react-dropdowns';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'>
              <button>
                <FieldSettings /> 
              </button>
            </TooltipComponent>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App