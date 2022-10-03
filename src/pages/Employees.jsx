import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject ,Toolbar} from '@syncfusion/ej2-react-grids';
import {collection,getDocs,doc,deleteDoc,getDoc} from 'firebase/firestore';
import {db} from '../firebase';
import {EditEmployee, Header} from '../components';

const Employees = () => {

  const [name,setName] = useState('');
  const [contact,setContact] = useState('');
  const [title,setTitle] = useState('');
  const [error,setError] = useState('');
  const [edit,setEdit] = useState(false);
  const id = useParams();


  const [data,setData] = React.useState([]);
  //get data to a form id via onsubmit event
  

  useEffect(() => {
    const fetchData = async () => {
        try {
            const docRef = doc(db, "employees", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setName(docSnap.data().name);
                setContact(docSnap.data().contact);
                setTitle(docSnap.data().title);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
},[]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "employees"));
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



  const deleteEmployee = async (id) => {
    try {
      await deleteDoc(doc(db, "employees", id));
      setData(data.filter((employee) => employee.id !== id))
      .then(() => {
        alert("Employee deleted successfully");
      }).catch((error) => {
        alert(error.message);
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  //use effect function for onclick edit event to get data to a form id via onsubmit event
  const editEmployee = async (id) => {
    try {
      const docRef = doc(db, "employees", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setName(docSnap.data().name);
          setContact(docSnap.data().contact);
          setTitle(docSnap.data().title);
          setEdit(true);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  } catch (error) {
      console.log(error);
  }
  }
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees"/>
      {/* create grid component and the make column directive for data showing*/}
      
      <button className="float-right  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 mb-2 mr-3">
        <Link to="/AddEmployees">Add Employee</Link>
      </button>
      
      <table class="w-full border">
        <thead>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center hidden lg:table-cell">
            <input type="checkbox" />
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            ID 
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Name
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Contact
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Title
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Address
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Action
          </th>

        </thead>
        <tbody>
         {data.map((employee) => (
           <tr class="bg-white border-b text-gray-700">
              <td class="p-3 text-center border">
                <input type="checkbox" />
              </td>
              <td class="p-3 text-center border">
                {employee.id}
              </td>
              <td class="p-3 text-center border">
                {employee.empName}
              </td>
              <td class="p-3 text-center border">
                {employee.contact}
              </td>
              <td class="p-3 text-center border">
                {employee.des}
              </td>
              <td class="p-3 text-center border">
                {employee.address}
              </td>
              <td class="p-3 text-center border">
                <div class="flex justify-center">
                  <EditEmployee id={employee.id} name={employee.empName} contact={employee.contact} title={employee.des} address={employee.address}/>
                 <button onClick={()=>deleteEmployee(employee.id)} type='submit' class="bg-red-500 text-white px-2 rounded-md hover:bg-red-600">Delete</button>
                </div>
              </td>  
           </tr>
         ))}
        </tbody>
      </table>

    

    </div>
  )
}

export default Employees
//                 <Link to="/EditEmp"><button onSubmit={editEmployee} class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md mr-2">Edit</button></Link>
