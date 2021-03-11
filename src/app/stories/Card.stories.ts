// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommonModule } from '@angular/common';

import CardComponent from '../card/card.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { MatButtonModule } from '@angular/material/button';
import Button from '../button/button.component'; 


export default {
  title: 'Standard-Components/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [ CardComponent, Button ],
      imports: [IonicModule.forRoot(), CommonModule, MaterialModule, MatButtonModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CardComponent> = (args) => ({
  component: CardComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  backgroundColor: "black"
};
