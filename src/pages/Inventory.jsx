import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Header,AddProduct} from '../components';
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Resize,Selection,ContextMenu,Inject,Edit,Toolbar,Sort,Filter} from '@syncfusion/ej2-react-grids';
import { inventoryGrid,inventoryData } from '../dummy_data/dummy';

const Inventory = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Inventory"/>
      <GridComponent id="inventoryGrid"
      //declare the data source here with remote data binding
      allowPaging
      allowSorting
      toolbar={['Search','Delete']}
      editSettings={{allowDeleting:true,allowEditing:true}}
      width='auto'>
        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='50'/>
          <ColumnDirective field='id' headerText='ID' width='100' textAlign="Center" isPrimaryKey={true} />
          <ColumnDirective field='Product' headerText='Product ' width='100' textAlign="Center" />
          <ColumnDirective field='Product Name' headerText='Product Name' width='100' textAlign="Center" />
          <ColumnDirective field='Retail Price' headerText='Retail Price' width='100' textAlign="Center" />
          <ColumnDirective field='Unit Price' headerText='Unit Price' width='100' textAlign="Center" />
          <ColumnDirective field='Supplier' headerText='Supplier' width='50' textAlign="Center" />
          <ColumnDirective field='Contact' headerText='Contact' width='100' textAlign="Center" />
          <ColumnDirective field='Qty' headerText='Qty' width='100' textAlign="Center" />

        </ColumnsDirective>
        <Inject services={[Sort,Filter,Page,Edit,Toolbar]}/>
      </GridComponent>
      <div className='flex items-center justify-center gap-3' >
        <Link to="/AddProduct"><button className="bg-black text-white p-1 mt-4 align-center rounded-xl px-1">Add Product</button></Link>
        <Link to="/EditProduct"><button className="bg-black text-white p-1 mt-4 align-center rounded-xl px-9">Edit</button></Link>
      </div>
    </div>
  )
}

export default Inventory;