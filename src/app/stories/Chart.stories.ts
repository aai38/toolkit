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
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    chartLegend: {control: 'boolean'},
    minimalValue: {control: 'number'},
    maximalValue: {control: 'number'},
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
    backgroundColor:"red",
    borderColor:"black",
    labels:['January', 'February', 'March', 'April', 'May', 'June'],
    data:[85, 72, 78, 75, 77, 75],
    legend:"heart rate",
    chartLegend: true,
    maximalValue: 100,
    minimalValue: 50    
};

export const Bar = Template.bind({});
Bar.args = {
    chartType: 'bar',
    backgroundColor:"red",
    borderColor:"black",
    labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    data:[2, 3, 1, 4, 2, 2, 2, 3],
    legend:"hours on phone",
    chartLegend: true
};

export const Doughnut = Template.bind({});
Doughnut.args = {
    chartType:'doughnut',
    labels:['WhatsApp', 'Facebook', 'Jodel'],
    data:[[2.3, 2.5, 3]],
    chartLegend: true
    
};
