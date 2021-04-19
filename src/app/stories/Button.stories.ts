// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommonModule } from '@angular/common';
import Button from '../button/button.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { MatButtonModule } from '@angular/material/button';


export default {
  title: 'Standard-Components/Button',
  component: Button,
  decorators: [
    moduleMetadata({
      declarations: [ Button ],
      imports: [IonicModule.forRoot(), CommonModule, MatButtonModule, MaterialModule],
    }),
  ],
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  component: Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Hello',
  backgroundColor: "RGBA(118,38,133,1)",
  type: 'basic'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  backgroundColor: "RGBA(43,6,231,1)"
};


