import React from 'react';
import { ScheduleComponent,ViewsDirective,ViewDirective,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop } from '@syncfusion/ej2-react-schedule';
//import { DatePickerComponent } from '@syncfusion/ej2-react-calendars' 
import { scheduleData } from '../dummy_data/dummy';
import { Header } from '../components';

const Calender = () => {
  return (
    <div className="m-2 md:m-10 mt-24 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calender"/>
      <ScheduleComponent height="650px" 
      eventSettings={{dataSource:scheduleData}}
      selectedDate={new Date(2022, 6, 26)}>
        <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calender