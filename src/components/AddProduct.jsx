
import React, { useRef } from 'react';
import { async } from '@firebase/util';
import { useState } from 'react';



const AddProduct = () => {

    const [product, setProduct] = useState({});
    const [price, setPrice] = useState({});
    const [supplier, setSupplier] = useState({});
    const [supplierContact, setSupplierContact] = useState({});
    const [quantity, setQuantity] = useState({});
    const [description, setDescription] = useState({});

    const [message, setMessage] = useState({error: false, message: ''});


    const handleSubmit = async(e)=>{
        e.preventDefault();
        alert(product, price, supplier, supplierContact, quantity, description);
        setMessage("");
        if(product === "" || price === "" || supplier === "" || supplierContact === "" || quantity === "" || description === ""){
            setMessage({error: true, message: "Please fill all the fields"});
            return;
        }
        //add new product to the database
        const newProduct = {
            product,
            price,
            supplier,
            supplierContact,
            quantity,
            description
        }
       console.log(newProduct);
       try {
        
       } catch (error) {
        
       }
    }

  return (
    <div className="m-2 p-4 md:m-10 mt-24 md:p-10 bg-white rounded-3xl w-5/6 place-content-center">
        <p className='font-bold text-justify text-2xl text-gray-900 mb-4'>Add Product</p>
        <div className='grid grid-cols-1 gap-6'>
            <form onSubmit={handleSubmit}>
            <label className='text-gray-700'>
                <span className='mr-3 font-bold'>Product Name</span>
                <input type="text" 
                name='product'
                value={product}
                onChange = {(e) => setProduct(e.target.value)}  
                className='mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0' placeholder='Enter product name' />
            </label>
            <label className='text-gray-700'>
                <span className='mr-3 font-bold'>Product Price</span>
                <input type="text"  
                value={price} 
                onChange = {(e) => setPrice(e.target.value)}
                className='mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0' placeholder='Enter price' />
            </label>
            {/*
            <label for="formFile" class="form-label inline-block mb-2 text-gray-700">
                 <span className='mr-3 font-bold'>Select Image</span>
                    <input class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"></input>
                    </label>
                    <br/>
            */}
            <label className='text-gray-700'>
                <span className='font-bold'>Supplier</span>
                <input type="text"
                 value={supplier}
                onChange = {(e) => setSupplier(e.target.value)}         
                className='mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0' placeholder='Supplier name'/>
            </label>
            <label className='text-gray-700'>
                <span className='font-bold'>Supplier Contact</span>
                <input type="text"
                onChange={(e) => setSupplierContact(e.target.value)}
                value={supplierContact} 
                className='mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0' placeholder='Supplier contact'/>
            </label>
            <label className='text-gray-700'>
                <span className='font-bold'>Quantity</span>
                <input type="text" 
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}           
                className='mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0' placeholder='Enter quantity'/>
            </label>
            <label className='text-gray-700'>
                <span className='font-bold'>Description</span>
                <input type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                className='mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0' placeholder='Enter description'/>
            </label>
            {/*
            <div className='flex gap-2'>
            <label className='text-gray-700'>
                <span className='font-bold'>Product Category</span>
                <div class="mb-3 xl:w-96">
                    <select class="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option selected>Select Category</option>
                        <option value="Arrack">Arrack</option>
                        <option value="Beer">Beer</option>
                        <option value="Whisky">Whisky</option>
                    </select>
                </div> 
            </label>
            <label className='text-gray-700'>
                <span className='font-bold'>Region</span>
                <div class="mb-3 xl:w-96">
                    <select class="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option selected>Select Region</option>
                        <option value="Scotch">Scotch</option>
                        <option value="Irish">Irish</option>
                        <option value="Whisky">Sri Lankan</option>
                    </select>
                </div> 
            </label>
            </div>
            */}
            </form>
        </div>
        <button className='bg-black text-white py-2 w-1/3 rounded-2xl mt-4' type='Submit'>Add Product</button>
    </div>
  )
}

export default AddProduct