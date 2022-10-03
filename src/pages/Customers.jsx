import React,{useEffect,useState} from 'react';
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter,ToolbarItems,Group} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import {collection,getDocs} from 'firebase/firestore';
import {db} from '../firebase';

const Customers = () => {
    
  const [users,setUsers] = useState([]);

  useEffect(() => {
    getUsers(); 
  },[]);

  function getUsers(){
    const usersRef = collection(db, 'users');
    getDocs(usersRef).then(Response => {
      const data = Response.docs.map(doc => doc.data());
      setUsers(data);
    }).catch(error => {
      console.log(error.message);
    })

  }
  
  //const toolBarOptions=ToolbarItems['Add','Edit','Delete']
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers"/>
      
      <table class="w-full border">
        <thead>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center hidden lg:table-cell">
            <input type="checkbox" />
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center" width="50px">
            ID
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center" width="100px">
            Name
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Contact
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Email
          </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border text-center">
            Address
          </th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr class="bg-white border-4 border-gray-200">
              <td class="p-3 text-gray-600 text-center border">
                <input type="checkbox" />
              </td>
              <td class="p-3 text-gray-600 text-center border">{user.id}</td>
              <td class="p-3 text-gray-600 text-center border">{user.name}</td>
              <td class="p-3 text-gray-600 text-center border">{user.contact}</td>
              <td class="p-3 text-gray-600 text-center border">{user.email}</td>
              <td class="p-3 text-gray-600 text-center border">{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Customers

/*
 <GridComponent id="customersGrid" 
      dataSource={users}
       //declare the data source here with remote data binding
      allowPaging
      allowSorting
      toolbar={['Search','Delete',]}
      editSettings={{allowDeleting:true,allowEditing:true,}}
      width="auto">
        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='50'/>
          <ColumnDirective field='id' headerText='ID' width='100' textAlign="Center" isPrimaryKey={true} />
          <ColumnDirective field='name' headerText='Name' width='100' textAlign="Center"/>
          <ColumnDirective field='shipping-address' headerText='Address' width='100' format="C2" textAlign="Center"/>
          <ColumnDirective field='email' width='100' headerText='Email' format="C2" textAlign="Center"/>
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>

*/