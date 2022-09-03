import React from 'react';
import{Link} from 'react-router-dom';
import { Header } from '../components';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { PieChart } from '../components';
import {DailySales,LastTransactions} from '../components';

const Sales = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  
  
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Sales Analytics" />
      <div className="control-pane content-end w-2/5">
        <DateRangePickerComponent placeholder='Enter Date Range' 
        startDate={startDate}
        endDate={endDate}
       // start="Year"
        //depth='Year'
        > 
        </DateRangePickerComponent>
      </div>
      <div className="flex flex-wrap  lg:flex-nowrap justify-center my-6 gap-3 ">
        <div className="w-1/4 bg-green-300 px-1 pb-3 rounded-xl ">
          <p className="text-center pt-1 font-bold">Income</p>
          <p className="text-center text-3xl font-bold">Rs.1,000,000</p>
        </div>
        <div className="w-1/4 bg-red-300  px-1 pb-3  rounded-xl">
          <p className="text-center pt-1 font-bold">Purchase</p>
          <p className="text-center text-3xl font-bold">Rs.600,000</p>
        </div>
        <div className="w-1/4 bg-slate-300 px-1 pb-3  rounded-xl">
          <p className="text-center pt-1 font-bold">Profit</p>
          <p className="text-center text-3xl font-bold">Rs.400,000</p>
        </div>
        <div className="w-1/4 bg-cyan-300 px-1 pb-3 rounded-xl">
          <p className="text-center pt-1 font-bold">Transactions</p>
          <p className="text-center text-3xl font-bold">457</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 place-content-between">
        <div>
        <p className='text-center pt-10 text-2xl font-bold '>Last Trasnactions</p>
        <LastTransactions/>
        </div>
        <div>
        <p className='text-center pt-10 text-2xl font-bold '>Sales by Category</p>
        <PieChart/>
        </div>
      </div>
      <div className='place-items-center w-full'>
      <DailySales/>
      <div class="flex items-center justify-center">
      <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="toolbar">
        <button type="button" class="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">May</button>
        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">June</button>
        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">July</button>
        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">August</button>
        <button type="button" class=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">September</button>
      </div>
      </div>
      
      </div>
      <div className='flex items-center justify-center '>
      <Link to='/SalesGrid'><button className="bg-black text-white p-1 mt-4 align-center rounded-xl">Sales Details</button></Link>
      </div>
      
    </div>

  )
}

export default Sales