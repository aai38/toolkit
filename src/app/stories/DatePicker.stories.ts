// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import IonDate from '../ion-datetime/ion-datetime.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




export default {
  date : new FormControl(new Date),
  range:  new FormGroup({
    start: new FormControl(),
    end: new FormControl()}),
  title: 'High-Order Components/DatePicker',
  component: IonDate,
  argTypes: {
    color_datepicker: {
      control: {
        type: 'radio',
        options: ['primary', 'warn', 'accent']
      }
    },
    color_input: {
      control: {
        type: 'radio',
        options: ['primary', 'warn', 'accent']
      }
    },
    onClick: { action: 'clicked' },
  },
  decorators: [
    moduleMetadata({
      declarations: [IonDate],
      imports: [IonicModule.forRoot(), MaterialModule, ReactiveFormsModule, CommonModule, BrowserAnimationsModule],
    }),
  ],
  
} as Meta;

const Template: Story<IonDate> = (args) => ({
  component: IonDate,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
    label : 'Enter date',
    label_cancelButton: 'Cancel',
    label_applyButton: 'Apply',
    color_datepicker: 'primary',
    color_input: 'primary',
    completelyDisabled: false,
    popupDisabled: false,
    showRange: false,
    toggleIcon: 'keyboard_arrow_down'
};

export const RangePicker = Template.bind({});
RangePicker.args = {
    label : 'Enter date range',
    placeholder_startDate: 'Start date',
    placeholder_endDate: 'End date',
    label_cancelButton: 'Cancel',
    label_applyButton: 'Apply',
    color_datepicker: 'primary',
    color_input: 'primary',
    completelyDisabled: false,
    popupDisabled: false,
    showRange: true,
    toggleIcon: 'date_range'
};


