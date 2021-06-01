// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommonModule } from '@angular/common';

import CheckboxComponent from '../checkbox/checkbox.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';


export default {
  title: 'Basic Components/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [ CheckboxComponent],
      imports: [IonicModule.forRoot(), CommonModule, MaterialModule],
    }),
  ],
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'warn', 'accent']
      }
    },
    checked: {control: 'boolean'},
  },
  
} as Meta;

const Template: Story<CheckboxComponent> = (args) => ({
  component: CheckboxComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  color: "primary",
  label: 'Checkbox',
  checked:false,
  disabled: false
  
};

export const Checked = Template.bind({});
Checked.args = {
    color: "primary",
    checked: true,
    label: 'checked Checkbox',
    disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
    color: "accent",
    label: 'Disabled',
    disabled:true
}

