// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import  { DialogElementsExample } from '../dialog/dialog.component';
import {DialogElementsExampleDialog} from '../dialog/dialog.component'
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { action } from '@storybook/addon-actions';



export default {
  date : new FormControl(new Date),
  title: 'Standard-Components/Dialog',
  component: DialogElementsExample,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [DialogElementsExample, DialogElementsExampleDialog],
      imports: [IonicModule.forRoot(), MaterialModule, ReactiveFormsModule, CommonModule],
    }),
  ],
  
} as Meta;

const Template: Story<DialogElementsExample> = (args) => ({
  component: DialogElementsExample,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
};

