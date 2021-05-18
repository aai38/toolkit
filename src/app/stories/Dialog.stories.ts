// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import  { DialogElement } from '../dialog/dialog.component';
import {DialogElementDialog} from '../dialog/dialog.component'
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import InputComponent from '../input/input.component';



export default {
  title: 'High-Order Components/Dialog',
  component: DialogElement,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [DialogElement, DialogElementDialog, InputComponent],
      entryComponents: [DialogElementDialog],
      imports: [IonicModule.forRoot(), MaterialModule, ReactiveFormsModule, CommonModule, BrowserAnimationsModule],
    }),
    
  ],
  
} as Meta;

const Template: Story<DialogElement> = (args) => ({
  component: DialogElement,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  label: 'Launch Dialog',
  title: 'Dialog title',
  dialogButtonLabel: 'Close',
  content: 'content',
  simple: true

  

};

export const TwoButtons = Template.bind({});
TwoButtons.args = {
  label: 'Launch Dialog',
  title: 'Dialog title',
  dialogButtonLabel: 'Close',
  dialogAcceptButtonLabel: 'Accept',
  content: 'content',
  simple: false

  

};

