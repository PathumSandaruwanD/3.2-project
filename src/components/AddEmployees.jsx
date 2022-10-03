import React, {useEffect,useState} from 'react'
import {collection,addDoc, serverTimestamp} from 'firebase/firestore';
import {db} from '../firebase'


const AddEmployees = () => {
    const employeeRef = collection(db, 'employees');
    const [empName,setEmpName] = useState('');
    const [contact,setContact] = useState('');
    const [address,setAddress] = useState('');
    const [des,setDes] = useState('');
    const [error,setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!empName || !address || !des){
            setError('Please fill all the fields');
            return;
        }else{
            try{
                const docRef = await addDoc(employeeRef, {
                    empName,
                    contact,
                    address,
                    des,
                    createdAt: serverTimestamp(),
                });
                console.log("Document written with ID: ", docRef.id);
            }catch(error){
                console.error("Error adding document: ", error);
            }
        }
    }

    
  return (
    <div  className="m-2 p-4 md:m-10 mt-24 md:p-10 bg-white rounded-3xl w-5/6 place-content-center">
        <p className='font-bold text-justify text-2xl text-gray-900 mb-4'>Add Product</p>
        <form onSubmit={handleSubmit}>
         <div class="relative z-0 mb-6 w-full group">
            {error ?<p className="text-red-500 text-xs italic">Enter Employee Name</p> : ""}
            <input onChange={(event)=>{setEmpName(event.target.value)}} type="text" name="floating_product_name" id="empName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Employee Name</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
        <input onChange={(event)=>{setContact(event.target.value)}} type="tel" name="floating_phone" id="contact" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number (123-456-7890)</label>
    </div>
         <div class="relative z-0 mb-6 w-full group">
            {error ?<p className="text-red-500 text-xs italic">Enter Address</p> : ""}
            <input onChange={(event)=>{setAddress(event.target.value)}} type="text" name="floating_product_name" id="address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
            {error ?<p className="text-red-500 text-xs italic">Enter Valid Job Title</p> : ""}
            <input onChange={(event)=>{setDes(event.target.value)}} type="text" name="floating_product_name" id="des" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Title</label>
        </div>
        <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Add Employee
            </button>
        </div>
        </form>
    </div>
  )
}

export default AddEmployees