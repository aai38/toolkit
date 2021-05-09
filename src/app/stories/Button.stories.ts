// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommonModule } from '@angular/common';
import Button from '../button/button.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { MatButtonModule } from '@angular/material/button';


export default {
  title: 'Basic Components/Button',
  component: Button,
  decorators: [
    moduleMetadata({
      declarations: [ Button ],
      imports: [IonicModule.forRoot(), CommonModule, MatButtonModule, MaterialModule],
    }),
  ],
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['basic', 'flat', 'raised', 'stroke']
      }
    },
    color: {
      control: {
        type: 'radio',
        options: [ 'primary', 'accent', 'warn']
      }
    },
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  component: Button,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  label: 'Hello',
  type: 'basic',
  disabled: false
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  type: 'flat',
  color: 'primary',
  disabled: false
}

export const AccentStroke = Template.bind({});
AccentStroke.args = {
  label: 'Stroke',
  type: 'stroke',
  color: 'accent',
  disabled: false
}

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  type: 'flat',
  color: 'primary',
  disabled: true
}




