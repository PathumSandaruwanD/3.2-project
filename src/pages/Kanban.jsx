import React from 'react';
import { KanbanComponent,ColumnDirective,ColumnsDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData,kanbanGrid } from '../dummy_data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return (
    //Creating card for kanban application
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      
      <Header category="App" title="Task Scheduler"/>
      {/*iterate kanban data from */}
      <button className="bg-black text-white p-1 m-5 px-3 rounded-xl ">Add New Card</button>
      <KanbanComponent id="kanban" dataSource={kanbanData} cardSettings={{contentField: 'Summary', headerField: 'Id'}}
      keyField="Status">
        <ColumnsDirective>
        {/*iterate kanban grid to make structure of the kanban*/}
          {kanbanGrid.map((item, index)=>
          <ColumnDirective key={index}{...item}/>)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban