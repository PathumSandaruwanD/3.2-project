import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import {ordersData, contextMenuItems,ordersGrid} from '../dummy_data/dummy';
import {Header} from '../components'


const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      {/* create grid component and the make column directive for data showing*/}
      <GridComponent id="orderGrid" 
      dataSource={ordersData} 
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto">
        <ColumnsDirective>
        {/* iterate dummy data*/}
          {ordersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Toolbar]}/>
      </GridComponent>
    </div>
    
  )
}

export default Orders