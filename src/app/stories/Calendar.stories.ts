// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from '../input/input.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CalendarComponent } from '../calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgCalendarModule } from 'ionic2-calendar';


export default {
  title: 'High-Order Components/Calendar',
  component: CalendarComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [CalendarComponent],
      imports: [IonicModule, MaterialModule, BrowserAnimationsModule, ReactiveFormsModule, CommonModule, NgCalendarModule],
    }),
  ],
  
} as Meta;

const Template: Story<CalendarComponent> = (args) => ({
  component: CalendarComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
};

