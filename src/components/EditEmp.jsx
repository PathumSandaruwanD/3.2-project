import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {db} from '../firebase';
import { doc,getDoc,updateDoc } from 'firebase/firestore';

const EditEmp = () => {
    const [name,setName] = useState('');
    const [title,setTitle] = useState('');
    const [error,setError] = useState('');
    const [edit,setEdit] = useState(false);
    const id = useParams();
    
    const [empName,setEmpName] = useState('');
    const [contact,setContact] = useState('');
    const[address,setAddress] = useState('');
    const[des,setDes] = useState('');


    
       //use effect to get data from firebase for onclick event
         



    const updateEmployee = async (e) => {
        e.preventDefault();
        try {
            const docRef = doc(db, "employees", id.id);
            await updateDoc(docRef, {
                empName,
                contact,
                des,
                address
            });
            setEdit(false);
            setError('');
        } catch (error) {
            setError(error.message);
        }
    }

    
    return (
    <div className="m-2 p-4 md:m-10 mt-24 md:p-10 bg-white rounded-3xl w-5/6 place-content-center">
         <p className='font-bold text-justify text-2xl text-gray-900 mb-4'>Edit Employee Details</p>
            <form onSubmit={updateEmployee} className="flex flex-col">
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_employee_name" id="empName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Employee Name" required="required"/>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_employee_contact" id="contact" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Contact" required="required"/>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_employee_title" id="des" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Title" required="required"/>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_employee_address" id="address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Address" required="required"/>
                </div>
                <div class="relative z-0 mb-6 w-full group">    
                    <button type="submit" class=" py-2.5 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">Update</button>
                </div>
            </form>
    </div>
  )
}

export default EditEmp