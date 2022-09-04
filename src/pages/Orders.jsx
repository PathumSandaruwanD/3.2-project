import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import {Header} from '../components'


const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      {/* create grid component and the make column directive for data showing*/}
      <GridComponent id="orderGrid" 
      //declare the data source here with remote data binding
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto">
        <ColumnsDirective>
        <ColumnDirective type='checkbox' width='50'/>
        <ColumnDirective field='id' headerText='Order Id' width='100' textAlign="Center" isPrimaryKey={true} />   
        <ColumnDirective field="Product" headerText="Product" width="100" textAlign="Center" />"      
        <ColumnDirective field='Product Name' headerText='Product Name' width='100' textAlign="Center" />
        <ColumnDirective field='Unit Price' headerText='Unit Price' width='100' textAlign="Center" />
        <ColumnDirective field='Quantity' headerText='Qty' width='50' textAlign="Center" />
        <ColumnDirective field='Total Price' headerText='Total Price' width='100' textAlign="Center" />
        <ColumnDirective field='Order Date' headerText='Order Date' width='100' textAlign="Center" />
        <ColumnDirective field='Customer' headerText='Customer' width='100' textAlign="Center" />
        <ColumnDirective field='Status' headerText='Status' width='100' textAlign="Center" />
        </ColumnsDirective>
        <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Toolbar]}/>
      </GridComponent>
    </div>
    
  )
}

export default Orders