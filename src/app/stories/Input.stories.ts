// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from '../input/input.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';


export default {
  title: 'Basic Components/Input',
  component: Input,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [Input],
      imports: [IonicModule, MaterialModule],
    }),
  ],
  
} as Meta;

const Template: Story<Input> = (args) => ({
  component: Input,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  placeholder: 'Type anything...',
  value: '',
  label:'Search'
};

export const WithValue = Template.bind({});
WithValue.args = {
  placeholder: 'Type anything...',
  value: 'SomeValue',
  label:'Input with Value'
};