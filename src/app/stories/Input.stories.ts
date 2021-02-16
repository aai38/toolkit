// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from './input.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';


export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [Input],
      imports: [IonicModule],
    }),
  ],
} as Meta;

const Template: Story<Input> = (args) => ({
  component: Input,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  name: 'Hello',
  required: true,
};
