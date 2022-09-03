import React from 'react';
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter} from '@syncfusion/ej2-react-grids';
import {pricebookData,pricebookGrid} from '../dummy_data/dummy';

import {Header} from '../components'

const PriceBook = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Price Book"/>
      <GridComponent id='pricebookGrid'
      dataSource={pricebookData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      editSettings={{allowDeleting:true,allowEditing:true}}
      width="auto">
        <ColumnsDirective>
          {pricebookGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default PriceBook