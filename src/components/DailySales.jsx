import React from 'react';
import {barCustomSeries, barPrimaryXAxis, barPrimaryYAxis} from '../dummy_data/dummy';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';


const DailySales = () => {
  
  return (
    <div className="mx-4 md:m-10 mt-24 p-2 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      
        <p className="font-bold text-2xl text-center">Daily Sales</p>
        <ChartComponent id="dailySales"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{border:{width:0}}}
        tooltip={{enable:true}}
        >
            <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}/>
            <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    </div>

  )
}

export default DailySales