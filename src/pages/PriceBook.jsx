import React from 'react';
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter} from '@syncfusion/ej2-react-grids';
import {pricebookData,pricebookGrid} from '../dummy_data/dummy';
import {collection,getDocs,doc,deleteDoc} from 'firebase/firestore';
import {db} from '../firebase';
import { useState,useEffect } from 'react';

import {Header} from '../components'

const PriceBook = () => {
  const [data,setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          list.push({id:doc.id,...doc.data()});
        });
        setData(list);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);


//get data from firebase product collection



  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Price Book"/>
      <table class="w-full border">
        <thead>
          <tr class="bg-gray-50 border-b">
            
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
              Product Name
            </th>
            
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
              Quantity
            </th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
              vendor
            </th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
              Region
            </th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
              Price
            </th>
            </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr class="bg-white border-b text-center">
            
            <td class="p-3 text-gray-600 border text-center">
              {product.title}
            </td>

            <td class="p-3 text-gray-600 border text-center">
              {product.quantity}
            </td>
            <td class="p-3 text-gray-600 border text-center">
              {product.vendor}
            </td>
            <td class="p-3 text-gray-600 border text-center">
              {product.region}
            </td>
            <td class="p-3 text-white border text-center bg-green-600">
              {product.price}
            </td>
            
          </tr>
          ))}
        </tbody>


      </table>
    </div>
  )
}

export default PriceBook