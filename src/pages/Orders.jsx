import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import {Header, OrderStatus} from '../components'
import {collection,getDocs} from 'firebase/firestore';
import {db} from '../firebase';
import React,{useEffect,useState} from 'react';


const Orders = () => {

  const [orders,setOrders] = useState([]);

  useEffect(() => {
    getOrders(); 
  },[]);

  function getOrders(){
    const ordersRef = collection(db, 'orders');
    getDocs(ordersRef).then(Response => {
      const data = Response.docs.map(doc => doc.data());
      setOrders(data);
    }).catch(error => {
      console.log(error.message);
    })
  }

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      {/* create grid component and the make column directive for data showing*/}
      <table class="w-full border">
        <thead>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center hidden lg:table-cell">
            <input type="checkbox" />
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            ID
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Product
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Product Name
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Customer
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Quantity
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Price
          </th>
          
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Status 
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Action
          </th>

        </thead>
        <tbody>
          {orders.map((orders) => (
            <tr>
            <td class="border px-4 py-2 text-center">
              <input type="checkbox" />
            </td>
            <td class="border px-4 py-2 text-center">
              {orders.orderId}
            </td>
            <td class="border px-4 py-2 text-center">
              <img src={orders.imageUrl} alt="" class="w-10 h-10 rounded-full" />
            </td>
            <td class="border px-4 py-2 text-center">
              {orders.productID}
            </td>
            <td class="border px-4 py-2 text-center">
              {orders.userName}
            </td>
            <td class="border px-4 py-2 text-center"> 
              {orders.quantity}
            </td>
            <td class="border px-4 py-2 text-center">
              {orders.price}
            </td>
            <td class="border px-4 py-2 text-center">
              
            </td>
            <td class="border px-4 py-2 text-center">
            <OrderStatus />
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  )
}

export default Orders