import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { salesTableData,salesTableGrid } from '../dummy_data/dummy';
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars';

const SalesGrid = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className='flex flex-inline m-4'>
      <p className='my-5 font-bold text-3xl w-4/5 text-left'>Sales Grid</p>
      <DateRangePickerComponent placeholder='Date Range'
      start='Year'
      depth='Year'>

      </DateRangePickerComponent>
      </div>
      
        <GridComponent id="salesGrid"
        title='Sales Analytics'
        dataSource={salesTableData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'>
            <ColumnsDirective>
                {salesTableGrid.map((item,index)=>(
                    <ColumnDirective key={index} {...item}/>
                ))}
            </ColumnsDirective>
            <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Toolbar]}/>
        </GridComponent>
    </div>
  )
}

export default SalesGrid