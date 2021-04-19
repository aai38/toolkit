// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import  { ChartComponent } from '../chart/chart.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';




export default {
  title: 'Standard-Components/Chart',
  component: ChartComponent,
  argTypes: {
    backgroundColorInput: { control: 'color' },
    borderColorInput: { control: 'color' },
    chartLegend: {control: 'boolean'},
    minInput: {control: 'number'},
    maxInput: {control: 'number'},
    chartType: {
      control: {
        type: 'radio',
        options: ['line', 'bar', 'doughnut']
      }
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [ChartComponent],
      imports: [IonicModule, MaterialModule, ReactiveFormsModule, CommonModule, ChartsModule],
      
    }),
  ],
  
  
} as Meta;

const Template: Story<ChartComponent> = (args) => ({
  component: ChartComponent,
  props: args,
});

export const Line = Template.bind({});
Line.args = {
    chartType :'line',
    backgroundColorInput:"red",
    borderColorInput:"black",
    labelArray:['January', 'February', 'March', 'April', 'May', 'June'],
    dataArrayInput:[85, 72, 78, 75, 77, 75],
    chartLabelInput:"heart rate",
    chartLegend: true,
    maxInput: 100,
    minInput: 50    
};

export const Bar = Template.bind({});
Bar.args = {
    chartType: 'bar',
    backgroundColorInput:"red",
    borderColorInput:"black",
    labelArray:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    dataArrayInput:[2, 3, 1, 4, 2, 2, 2, 3],
    chartLabelInput:"hours on phone",
    chartLegend: true
};

export const Doughnut = Template.bind({});
Doughnut.args = {
    chartType:'doughnut',
    labelArray:['WhatsApp', 'Facebook', 'Jodel'],
    dataArrayInput:[[2.3, 2.5, 3]],
    chartLegend: true
    
};
