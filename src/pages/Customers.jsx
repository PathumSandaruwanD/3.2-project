import React from 'react';
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter,ToolbarItems,Group} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

const Customers = () => {
    
  
  
  //const toolBarOptions=ToolbarItems['Add','Edit','Delete']
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers"/>
      
      <GridComponent id="customersGrid" 
       //declare the data source here with remote data binding
      allowPaging
      allowSorting
      toolbar={['Search','Delete',]}
      editSettings={{allowDeleting:true,allowEditing:true,}}
      width="auto">
        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='50'/>
          <ColumnDirective field='id' headerText='ID' width='100' textAlign="Center" isPrimaryKey={true} />
          <ColumnDirective field='Name' width='100' textAlign="Right"/>
          <ColumnDirective field='Contact Number' width='100'/>
          <ColumnDirective field='Order Count' width='100' textAlign="Right"/>
          <ColumnDirective field='Address' width='100' format="C2" textAlign="Right"/>
          <ColumnDirective field='Email' width='100' format="C2" textAlign="Right"/>
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>

    </div>
  )
}

export default Customers