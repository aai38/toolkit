// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from '../input/input.component';
import CardComponent from '../card/card.component'
import Button from '../button/button.component'
import IonMenuComponent from '../ion-menu/ion-menu.component'
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import  HomePage  from '../home/home.page';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import IonDatetime from '../ion-datetime/ion-datetime.component'
import Card from '../card/card.component'


export default {
  title: 'Testing Page/Start',
  component: HomePage,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [HomePage, Input, CardComponent, Button, IonMenuComponent, IonDatetime, Card],
      imports: [IonicModule, MaterialModule, CommonModule, ReactiveFormsModule],
    }),
  ],
  
} as Meta;

const Template: Story<HomePage> = (args) => ({
  component: HomePage,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
};
