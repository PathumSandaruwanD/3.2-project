import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Header,AddProduct,ProductTable} from '../components';

import {collection,getDocs,doc,deleteDoc} from 'firebase/firestore';
import {db} from '../firebase';




const Inventory = () => {
 

  const [inventory,setInventory] = useState([]);

  useEffect(() => {
    getInventory();
  },[]);
  function getInventory(){
    const inventoryRef = collection(db, 'products');
    getDocs(inventoryRef).then(Response => {
      const data = Response.docs.map(doc => doc.data());
      setInventory(data);
    }).catch(error => {
      console.log(error.message);
    })
    
  }


  
  //how to code to delete a row from the grid
  function deleteRow(){
    const docRef = doc(db, "products", "id");
    deleteDoc(docRef).then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }
  

  //delete doc from firebase
  const constructor = () => {
    
    this.id= {required: true};
    

  }

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Inventory"/>
      
        <Link to="/AddProduct"><button className="float-right  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Add Product</button></Link>
     
     
      {/*
      <GridComponent id="inventoryGrid"
      dataSource={inventory}
    
      //declare the data source here with remote data binding
      allowPaging={true}
      allowSorting={true}
      toolbar={['Search','Delete','Update','Cancel']}
      editSettings={{allowDeleting:true,allowEditing:true,mode:'Dialog',showDeleteConfirmDialog:true}}
      width='auto'>
        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='50'/>
          <ColumnDirective field='id' headerText='ID' width='100' textAlign="Center" isPrimaryKey={true} />
          <ColumnDirective field='Product' headerText='Product ' width='100' textAlign="Center" />
          <ColumnDirective field='title' headerText='Product Name' width='100' textAlign="Center" />
          <ColumnDirective field='price' headerText='Retail Price' width='100' textAlign="Center" />
          <ColumnDirective field='unitPrice' headerText='Unit Price' width='100' textAlign="Center" />
          <ColumnDirective field='Supplier' headerText='Supplier' width='50' textAlign="Center" />
          <ColumnDirective field='Contact' headerText='Contact' width='100' textAlign="Center" />
          <ColumnDirective field='quantity' headerText='Qty' width='100' textAlign="Center" />

        </ColumnsDirective>
        <Inject services={[Sort,Filter,Page,Edit,Toolbar]}/>
      </GridComponent>
      */}

      <ProductTable/>
      
    </div>
  )
}

export default Inventory;

// <Link to="/EditProduct"><button className="bg-black text-white p-1 mt-4 align-center rounded-xl px-9">Edit</button></Link>
