// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import  { ChartComponent } from '../chart/chart.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';




export default {
  title: 'Standard-Components/Chart',
  component: ChartComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    chartLegend: {control: 'boolean'},
    minimalValue_x: {control: 'number'},
    maximalValue_x: {control: 'number'},
    minimalValue_y: {control: 'number'},
    maximalValue_y: {control: 'number'},
    chartType: {
      control: {
        type: 'radio',
        options: ['line', 'bar', 'doughnut', 'radar', 'pie', 'bubble', 'polarArea', 'scatter']
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
    backgroundColor:"slateblue",
    borderColor:"black",
    labels:['January', 'February', 'March', 'April', 'May', 'June'],
    data:[85, 72, 78, 75, 77, 75],
    legend:"heart rate",
    chartLegend: true,
    maximalValue_y: 100,
    minimalValue_y: 50    
};

export const Bar = Template.bind({});
Bar.args = {
    chartType: 'bar',
    backgroundColor:"forestgreen",
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
    data:[2, 2, 3],
    chartLegend: true
    
};

export const Radar = Template.bind({});
Radar.args = {
  chartType:'radar',
  labels: ['Punctuality', 'Communication', 'Problem Solving',
  'Team Player', 'Coding', 'Technical Knowledge', 'Meeting Deadlines'],
  data: [0, 1, 2, 3, 4, 5, 6],
  legend: "Employee Skill Analysis"
}

export const Pie = Template.bind({});
Pie.args = {
  chartType:'pie',
  labels: ['SkyFi', 'Drama', 'Comedy'],
  data: [30, 50, 20]
}

export const Bubble = Template.bind({});
Bubble.args = {
    chartType: 'bubble',
    backgroundColor:"khaki",
    borderColor:"black",
    data:[
    {x: 15, y: 15, r: 15 },
    { x: 25, y: 15, r: 25 },
    { x: 36, y: 12, r: 33 },
    { x: 10, y: 18, r: 18 },],
    legend:"Investment",
    minimalValue_y: 0,
    maximalValue_y: 50,
    minimalValue_x: 0,
    maximalValue_x: 50,
    chartLegend: true
};

export const PolarArea = Template.bind({});
PolarArea.args = {
  chartType:'polarArea',
  labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
  data: [300, 500, 100, 40, 120]
}

export const Scatter = Template.bind({});
Scatter.args = {
    chartType: 'scatter',
    backgroundColor:"slateblue",
    borderColor:"black",
    data:[
    {x: 15, y: 15 },
    { x: 25, y: 15},
    { x: 36, y: 12},
    { x: 10, y: 18},],
    legend:"Series A",
    minimalValue_y: 0,
    maximalValue_y: 50,
    minimalValue_x: 0,
    maximalValue_x: 50,
    chartLegend: true
};
