// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import  { DialogElementsExample } from '../dialog/dialog.component';
import {DialogElementsExampleDialog} from '../dialog/dialog.component'
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export default {
  title: 'Standard-Components/Dialog',
  component: DialogElementsExample,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [DialogElementsExample, DialogElementsExampleDialog],
      entryComponents: [DialogElementsExampleDialog],
      imports: [IonicModule.forRoot(), MaterialModule, ReactiveFormsModule, CommonModule, BrowserAnimationsModule],
    }),
    
  ],
  
} as Meta;

const Template: Story<DialogElementsExample> = (args) => ({
  component: DialogElementsExample,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  label: 'Launch Dialog',
};

