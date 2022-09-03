import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import {lastTransData, contextMenuItems,lastTransGrid} from '../dummy_data/dummy';


const LastTransactions = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <GridComponent id="orderGrid" 
      dataSource={lastTransData} 
      allowPaging
      width="auto">
              <ColumnsDirective>
        {/* iterate dummy data*/}
          {lastTransGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize,ContextMenu,Filter,Page,]}/>
      </GridComponent>
    </div>
  )
}

export default LastTransactions