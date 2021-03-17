// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import IonDate from '../ion-datetime/ion-datetime.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';



export default {
  date : new FormControl(new Date),
  title: 'Standard-Components/DatePicker',
  component: IonDate,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    moduleMetadata({
      declarations: [IonDate],
      imports: [IonicModule.forRoot(), MaterialModule, ReactiveFormsModule, CommonModule],
    }),
  ],
  
} as Meta;

const Template: Story<IonDate> = (args) => ({
  component: IonDate,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
    label : 'Enter date'
};
