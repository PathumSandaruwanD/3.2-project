import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject ,Toolbar} from '@syncfusion/ej2-react-grids';

import {Header} from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees"/>
      {/* create grid component and the make column directive for data showing*/}
      <GridComponent id="employeeGrid" 
      //declare the data source here with remote data binding
      allowPaging
      allowSorting
      toolbar={['Search','Delete','Edit','Add']}
      editSettings={{allowAdding:true,allowDeleting:true,allowEditing:true}}
      width="auto">
        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='50'/>
          <ColumnDirective field='id' headerText='ID' width='100' textAlign="Center" isPrimaryKey={true} />
          <ColumnDirective field='Name' width='100' textAlign="Center"/>
          <ColumnDirective field='Contact Number' width='100'/>
          <ColumnDirective field='Address' width='100' format="C2" textAlign="Center"/>
          <ColumnDirective field='Hire Date' width='100'/>
          <ColumnDirective field='Email' width='100' format="C2" textAlign="Center"/>
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees