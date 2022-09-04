import React from 'react';
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter} from '@syncfusion/ej2-react-grids';
import {pricebookData,pricebookGrid} from '../dummy_data/dummy';

import {Header} from '../components'

const PriceBook = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Price Book"/>
      <GridComponent id='pricebookGrid'
      //declare the data source here with remote data binding
      allowPaging
      allowSorting
      toolbar={['Search']}
      editSettings={{allowDeleting:true,allowEditing:true}}
      width="auto">
        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='50'/>
          <ColumnDirective field='id' headerText='ID' width='100' textAlign="Center" isPrimaryKey={true} />
          <ColumnDirective field='Product' headerText='Product ' width='100' textAlign="Center" />
          <ColumnDirective field='Product Name' headerText='Product Name' width='100' textAlign="Center" />
          <ColumnDirective field='Unit Price' headerText='Unit Price' width='100' textAlign="Center" />
          <ColumnDirective field='Supplier' headerText='Supplier' width='50' textAlign="Center" />
          <ColumnDirective field='Region' headerText='Region' width='100' textAlign="Center" />
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default PriceBook