import React from 'react';
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter,ToolbarItems} from '@syncfusion/ej2-react-grids';
import { customersData,customersGrid } from '../dummy_data/dummy'
import { Header } from '../components';

const Customers = () => {
  //const toolBarOptions=ToolbarItems['Add','Edit','Delete']
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers"/>
      {/* create grid component and the make column directive for data showing*/}
      <GridComponent id="customersGrid" 
      dataSource={customersData} 
      allowPaging
      allowSorting
      toolbar={['Search','Delete',]}
      editSettings={{allowDeleting:true,allowEditing:true,}}
      width="auto">
        <ColumnsDirective>
        {/* iterate dummy data*/}
          {customersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers