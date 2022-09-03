import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject ,Toolbar} from '@syncfusion/ej2-react-grids';
import {employeesData, contextMenuItems,employeesGrid} from '../dummy_data/dummy';
import {Header} from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees"/>
      {/* create grid component and the make column directive for data showing*/}
      <GridComponent id="employeeGrid" 
      dataSource={employeesData} 
      allowPaging
      allowSorting
      toolbar={['Search','Delete','Edit','Add']}
      editSettings={{allowAdding:true,allowDeleting:true,allowEditing:true}}
      width="auto">
        <ColumnsDirective>
        {/* iterate dummy data*/}
          {employeesGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees