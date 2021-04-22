// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from '../input/input.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { RadioButtonComponent } from '../radio-button/radio-button.component';


export default {
  title: 'Standard-Components/Radio-Button',
  component: RadioButtonComponent,
  argTypes: {
      color: {
    control: {
      type: 'radio',
      options: ['primary', 'warn', 'accent']
    }
  },
  disabled: {control: 'boolean'},

  },
  decorators: [
    moduleMetadata({
      declarations: [RadioButtonComponent],
      imports: [IonicModule, MaterialModule],
    }),
  ],
  
} as Meta;

const Template: Story<RadioButtonComponent> = (args) => ({
  component: RadioButtonComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  labels: ['Winter', 'Spring', 'Summer', 'Autumn'],
  radioButtonsLabel: "Pick one Option",
  color: 'primary',
  disabled: false
};
