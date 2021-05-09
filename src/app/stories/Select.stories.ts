// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from '../input/input.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SelectComponent } from '../select/select.component';


export default {
  title: 'Basic Components/Select',
  component: SelectComponent,
  argTypes: {
      requiredSelection: {control: 'boolean'},
      showHint: {control: 'boolean'}
  },
  decorators: [
    moduleMetadata({
      declarations: [SelectComponent],
      imports: [IonicModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
  
} as Meta;

const Template: Story<SelectComponent> = (args) => ({
  component: SelectComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  requiredSelection: false,
  options: [
    {value: 'germany-0', viewValue: 'Germany'},
    {value: 'other', viewValue: 'Other'}
  ],
  label: 'Select Country',
  showHint: false
};

export const SelectionRequired = Template.bind({});
SelectionRequired.args = {
  requiredSelection: true,
  options: [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ],
  label: 'Select Food',
  hint: 'Hint',
  showHint: true
};
