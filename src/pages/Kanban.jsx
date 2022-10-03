import React,{useEffect,useState} from 'react';
import { KanbanComponent,ColumnDirective,ColumnsDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData,kanbanGrid } from '../dummy_data/dummy';
import { Header } from '../components';
import {collection,getDocs} from 'firebase/firestore';
import {db} from '../firebase';
import { DataManager,UrlAdaptor } from '@syncfusion/ej2/data';



const Kanban = () => {
  
  const [kanban,setKanban] = useState([]);

  useEffect(() => {
    getKanban();
  },[]);

  function getKanban(){
    const kanbanRef = collection(db, 'kanban');
    getDocs(kanbanRef).then(Response => {
      const data = Response.docs.map(doc => doc.data());
      setKanban(data);
    }).catch(error => {
      console.log(error.message);
    })

  }
  return (
    //Creating card for kanban application
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      
      <Header category="App" title="Task Scheduler"/>
      {/*iterate kanban data from */}
      {/*
      <button className="bg-black text-white p-1 m-5 px-3 rounded-xl ">Add New Card</button>
      <KanbanComponent id="kanban" dataSource={kanban} cardSettings={{contentField: 'summary', headerField: 'id'}}
      keyField="Status">
        <ColumnsDirective>
       
          {kanbanGrid.map((item, index)=>
          <ColumnDirective key={index}{...item}/>)}
        </ColumnsDirective>
      </KanbanComponent>
      */}
      <KanbanComponent id="kanban" dataSource={kanban} keyField="Status"  cardSettings={{ contentField: "Summary", headerField: "Id" }} >
        <ColumnsDirective >
          <ColumnDirective headerText="Todo" keyField="Open" allowToggle="true"/>
          <ColumnDirective headerText="In Progress" keyField="InProgress" allowToggle="true"/>
          <ColumnDirective headerText="Delivered" keyField="Testing" allowToggle="true"/>
          <ColumnDirective headerText="Completed" keyField="Close" allowToggle="true"/>
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban