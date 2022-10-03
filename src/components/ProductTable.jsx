import React from 'react'
import { useState,useEffect } from 'react';
import {collection,getDocs,doc,deleteDoc,updateDoc} from 'firebase/firestore';
import {db} from '../firebase';
import EditModal from './EditModal';

const ProductTable = () => {
    const [data,setData] = useState([]);
    const [showModal,setShowModal] = useState(false);

   


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
   /*
    function getInventory(){
        const inventoryRef = collection(db, 'products');
        getDocs(inventoryRef).then(Response => {
            const data = Response.docs.map(doc => doc.data());
            setInventory(data);
        }).catch(error => {
            console.log(error.message);
        })
    }
   */
    const deleteProduct = async (id) => {
        try {
            await deleteDoc(doc(db, "products", id));
            setData(data.filter((product) => product.id !== id))
            .then(() => {
                alert("Product deleted successfully");
            }).catch((error) => {
                alert(error.message);
            })
        } catch (error) {
            console.log(error.message);
        }
    }


  return (
    <div class="table w-full p-2">
        {/*Create table with 4 columns*/}
        <table class="w-full border">
            <thead>
                <tr class="bg-gray-50 border-b">
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center hidden lg:table-cell">
                        <input type="checkbox" />
                    </th>
                    
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
                        ID 
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
                        Image
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
                        Name
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
                        Price
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
                        Quantity
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
                        Supplier 
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
                        Contact
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
                        Vendor
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
                        Actions
                    </th>

                    
                </tr>
            </thead>
            <tbody>
                {/*Loop through data in inventory*/}
                {data.map((item) => (
                    <tr class="bg-white border-b text-gray-700">
                        <td class="p-3 text-center">
                            <input type="checkbox" />
                        </td>
                        <td class="p-3 text-center " width="70px" >
                            {/*make this row a input*/}
                            {item.id}
                        </td>
                        <td class="p-3 text-center">
                            <img src={item.imageUrl} alt="product" class="w-10 h-10"/>
                        </td>
                        <td class="p-3 text-center">
                            {item.title}

                        </td>
                        <td class="p-3 text-center">
                            {item.price}
                        </td>
                        <td class="p-3 text-center width:30px">
                            {item.quantity}
                        </td>
                        <td class="p-3 text-center" >
                            {item.supplier}

                        </td>
                        <td class="p-3 text-center">
                            {item.supPhone}
                        </td>
                        <td class="p-3 text-center">
                            {item.vendor}
                        </td>
                        <td class="p-3 text-center">
                            <div className='inline'>
                                 <EditModal />

                                {/*use deleteProduct */}
                                <button onClick={()=>deleteProduct(item.id) } class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                    Delete
                                </button>
                                

                            </div>
                        </td>
                        
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}

export default ProductTable;