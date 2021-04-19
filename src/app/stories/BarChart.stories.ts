// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import  { BarChartComponent } from '../bar-chart/bar-chart.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';




export default {
  title: 'Standard-Components/Charts/Bar chart',
  component: BarChartComponent,
  argTypes: {
    backgroundColorInput: { control: 'color' },
    borderColorInput: { control: 'color' },
    lineChartLegend: {control: 'boolean'}
  },
  decorators: [
    moduleMetadata({
      declarations: [BarChartComponent],
      imports: [IonicModule, MaterialModule, ReactiveFormsModule, CommonModule, ChartsModule],
      
    }),
  ],
  
  
} as Meta;

const Template: Story<BarChartComponent> = (args) => ({
  component: BarChartComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
    backgroundColorInput:"red",
    borderColorInput:"black",
    labelArray:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    dataArrayInput:[2, 3, 1, 4, 2, 2, 2, 3],
    chartLabelInput:"hours on phone",
    barChartLegend: true




    
};
