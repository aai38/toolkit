// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from '../input/input.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { LoadingComponent } from '../loading/loading.component';


export default {
  title: 'Standard-Components/Loading',
  component: LoadingComponent,
  argTypes: {
    color: {
        control: {
          type: 'radio',
          options: ['primary', 'warn', 'accent']
        }
      },
      value: {control: 'number'}
  },
  decorators: [
    moduleMetadata({
      declarations: [LoadingComponent],
      imports: [IonicModule, MaterialModule],
    }),
  ],
  
} as Meta;

const Template: Story<LoadingComponent> = (args) => ({
  component: LoadingComponent,
  props: args,
});

export const Spinner = Template.bind({});
Spinner.args = {
  spinner: true,
  color: 'primary',
  value: 10,
  mode: 'indeterminate'
};
Spinner.argTypes = {
  mode: {
    control: {
      type: 'radio',
      options: [
        'indeterminate',
        'determinate'
      ],
    },
    defaultValue: 'indeterminate',
  },
}

export const Bar = Template.bind({});
Bar.args = {
  mode: 'indeterminate',
  spinner: false,
  color: 'primary',
  value: 10
};

Bar.argTypes = {
  mode: {
    control: {
      type: 'radio',
      options: ['indeterminate', 'determinate', 'buffer', 'query']
    }
  },
}
