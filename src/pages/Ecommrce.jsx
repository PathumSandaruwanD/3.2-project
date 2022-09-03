import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Button,SparkLine } from '../components';
import { earningData, SparklineAreaData,ecomPieChartData } from '../dummy_data/dummy';
import { useStateContext } from '../context/ContextProvider';


  const Ecommrce = () => {
    return (
      <div className="mt-12">
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full 
          lg:w-80 p-8 pt-9 m-3  bg-no-repeat bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-center' >
           <div className="flex justify-between items-center">
            <div>
              <p className='font-bold text-white'>Monthly Earning</p>
              <p className='text-2xl  text-white font-bold'>Rs.123345</p>
            </div>
           </div>
           <div className="mt-6">
            <Button color="white" bgColor="blue" text="Download Report" borderRadius="10px"/>
           </div>
          </div>
          {/*for the cards in the landing page*/}
          <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
            {earningData.map((item)=>(
              <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
                {/*button inherit from above class*/}
                <button type="button" style={{color:item.iconColor, background:item.iconBg}} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/*Revenue charts*/}
        <div className='flex gap-10 flex-wrap justify-center'>
          <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 ">
              <div className='flex justify-between'>
                <p className='font-xl font-xl'>Revenue Information</p>
                <div className='flex items-center gap-4'>
                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Monthly Expenses</span>
                </p>
                <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Monthly Income</span>
                </p> 
                </div>
              </div>
              <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                <div className='border-r-1 border-color m-4 pr-10'>
                  <div>
                    <p>
                      <span className='text-3xl font-semibold '>Rs.245097.00</span>
                      <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-500 ml-3 text-xs'>4%</span>
                    </p>
                    <p className="text-gray-500 mt-1">Income</p>
                  </div>
                  <div className='mt-8'>
                    <p>
                      <span className='text-3xl font-semibold '>Rs.135097.00</span>
                      <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-red-500 ml-3 text-xs'>8%</span>
                    </p>
                    <p className="text-gray-500 mt-1">Purchases</p>
                  </div>
                  {/*Spark line chart*/}

                  <div className='mt-5'>
                    <SparkLine currentColor="blue" id="line-sparkline" type="Line" height="80px" width="250px" data={SparklineAreaData} color="blue"/>
                  </div>
                  <div className='mt-2'>
                    <Button color="white" bgColor="blue" text="Get Report" borderRadius="10px" />
                  </div>
                </div>
                <div>
                  {/*Stacked graph*/}
                  <Stacked width="320px" height="360px"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Ecommrce