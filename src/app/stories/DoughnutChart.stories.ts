// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import  { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';




export default {
  title: 'Standard-Components/Charts/Doughnut chart',
  component: DoughnutChartComponent,
  argTypes: {
    doughnutChartLegend: {control: 'boolean'}
  },
  decorators: [
    moduleMetadata({
      declarations: [DoughnutChartComponent],
      imports: [IonicModule, MaterialModule, ReactiveFormsModule, CommonModule, ChartsModule],
      
    }),
  ],
  
  
} as Meta;

const Template: Story<DoughnutChartComponent> = (args) => ({
  component: DoughnutChartComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
    labelArray:['WhatsApp', 'Facebook', 'Jodel'],
    dataArrayInput:[[2.3, 2.5, 3]],
    doughnutChartLegend: true




    
};
