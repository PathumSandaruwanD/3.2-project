import React from 'react';
import { pieChartData } from '../dummy_data/dummy';
import { ChartHeader,Pie as PieChart } from '.';
import { AccumulationChartComponent,PieSeries,AccumulationSeriesCollectionDirective,Inject,AccumulationSeriesDirective,AccumulationDataLabel,AccumulationLegend,AccumulationTooltip } from '@syncfusion/ej2-react-charts';


const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
       <AccumulationChartComponent tooltip={{enable:true}}>
        <Inject services={[PieSeries,AccumulationDataLabel,AccumulationLegend,AccumulationTooltip]}></Inject>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective type='Pie' innerRadius='50%' dataSource={pieChartData} xName='x' yName='y' name='Sales' dataLabel={{visible:true,name:"text",position:"Inside"}}></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
       </AccumulationChartComponent>
    </div>
  )
}

export default Pie