import React,{useEffect, useState} from 'react'
import {db} from '../firebase'
import {collection,getDocs} from 'firebase/firestore';




const EditModal = () => {
    const [showModal,setShowModal] = useState(false);
    const [product,setProduct] = useState('');

    const [error,setError] = useState("");

    useEffect(() => {
        getProduct();
    },[]);
    function getProduct(){
        const productRef = collection(db, 'products');
        getDocs(productRef).then(Response => {
            const data = Response.docs.map(doc => doc.data());
            setProduct(data);
        }).catch(error => {
            console.log(error.message);
        })
    }

    
    
  return (
    <div>
        <button
        className="bg-green-500 text-white active:bg-green-800 
      font-bold py-1 px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)} 
      >
       Edit
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Edit Product Details</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                <input disabled type="text" name="floating_product_name" id="id" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Product ID" required="">
                 
                </input>

                <input type="text" name="floating_product_name" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Product Name" required=""/>
               
                {error ? <p className="text-red-500 text-xs italic">Enter Product Name</p> : ""}
                <input type="text" name="floating_vendor" id="vendor" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Vendor" required=""/>

                {error ? <p className="text-red-500 text-xs italic">Enter Unit Price</p> : ""}
                <input type="number" step={10} min='0' name="floating_unit_price" id="unitPrice" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Unit Price" required=""/>

                {error ? <p className="text-red-500 text-xs italic">Enter Retail Price</p> : ""}
                <input type="number" step={10}  min='0' name="floating_retail_price" id="price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Retail Price" required=""/>

                {error ? <p className="text-red-500 text-xs italic">Enter Quantity</p> : ""}
                <input type="number" step={1} min='0' name="floating_quantity" id="quantity" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Quantity" required=""/>

                {error ? <p className="text-red-500 text-xs italic">Enter Region</p> : ""}
                <select id="region" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1">
                    <option selected>Choose a region</option>
                    <option value="America">America</option>
                    <option value="Italy">Italy</option>
                    <option value="Irish">Irish</option>
                    <option value="Scotch">Scotch</option>
                    <option value="Russian">Russian</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                </select>
            
                {error ? <p className="text-red-500 text-xs italic">Enter Category</p> : ""}
                <select id="category" class="bg-gray-50 border my-1 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a category</option>
                    <option value="Arrack">Arrack</option>
                    <option value="Brandy">Brandy</option>
                    <option value="Gin">Gin</option>
                    <option value="Rum">Rum</option>
                    <option value="Rum">Vodka</option>
                    <option value="Rum">Wine</option>
                </select>

                {error ? <p className="text-red-500 text-xs italic">Enter Supplier</p> : ""}
                <input type="text" name="floating_supplier" id="supplier" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Supplier" required=""/>

                {error ? <p className="text-red-500 text-xs italic">Enter Supplier Contact</p> : ""}
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="supPhone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Contact" required=""/>

                </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-green-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default EditModal