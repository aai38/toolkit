// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import  { LineChartComponent } from '../line-chart/line-chart.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';




export default {
  title: 'Standard-Components/Line chart',
  component: LineChartComponent,
  argTypes: {
    backgroundColorInput: { control: 'color' },
    borderColorInput: { control: 'color' },
    lineChartLegend: {control: 'boolean'},
    minInput: {control: 'number'},
    maxInput: {control: 'number'}
  },
  decorators: [
    moduleMetadata({
      declarations: [LineChartComponent],
      imports: [IonicModule, MaterialModule, ReactiveFormsModule, CommonModule, ChartsModule],
      
    }),
  ],
  
  
} as Meta;

const Template: Story<LineChartComponent> = (args) => ({
  component: LineChartComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
    backgroundColorInput:"red",
    borderColorInput:"black",
    labelArray:['January', 'February', 'March', 'April', 'May', 'June'],
    dataArrayInput:[85, 72, 78, 75, 77, 75],
    chartLabelInput:"heart rate",
    lineChartLegend: true,
    maxInput: 100,
    minInput: 50




    
};
