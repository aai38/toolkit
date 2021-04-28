// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { EmptyStatesComponent } from '../empty-states/empty-states.component';


export default {
  title: 'Standard-Components/Empty States',
  component: EmptyStatesComponent,
  decorators: [
    moduleMetadata({
      declarations: [ EmptyStatesComponent],
      imports: [IonicModule.forRoot(), CommonModule, MaterialModule],
    }),
  ],
  argTypes: {
    width: {control: 'number'},
    height: {control: 'number'}
  },
  
} as Meta;

const Template: Story<EmptyStatesComponent> = (args) => ({
  component: EmptyStatesComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  emptyLabel: 'no studies available',
  icon: 'broken_image',
  buttonLabel: 'go to main page'
  
};



