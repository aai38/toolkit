// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from '../input/input.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { SlideToggleComponent } from '../slide-toggle/slide-toggle.component';


export default {
  title: 'Basic Components/Slide Toggle',
  component: SlideToggleComponent,
  argTypes: {
    color: {
        control: {
          type: 'radio',
          options: ['primary', 'warn', 'accent']
        }
      },
  },
  decorators: [
    moduleMetadata({
      declarations: [SlideToggleComponent],
      imports: [IonicModule, MaterialModule],
    }),
  ],
  
} as Meta;

const Template: Story<SlideToggleComponent> = (args) => ({
  component: SlideToggleComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
    color: 'primary',
  label: 'Slide me',
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    color: 'primary',
  label: 'Disabled',
  checked: false,
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
    color: 'accent',
  label: 'Checked',
  checked: true,
  disabled: false,
};
