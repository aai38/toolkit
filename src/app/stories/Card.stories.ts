// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommonModule } from '@angular/common';

import CardComponent from '../card/card.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { MatButtonModule } from '@angular/material/button';
import Button from '../button/button.component'; 
import { MatIconModule } from '@angular/material/icon';

import * as ButtonStories from './Button.stories'


export default {
  title: 'Standard-Components/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [ CardComponent, Button ],
      imports: [IonicModule.forRoot(), CommonModule, MaterialModule, MatButtonModule, MatIconModule],
    }),
  ],
  argTypes: {
    width: {control: 'number'},
    height: {control: 'number'}
  },
} as Meta;

const Template: Story<CardComponent> = (args) => ({
  component: CardComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  label: 'View',
  image: "assets/blabla.jpg",
  width: 300,
  height: 300,
  headline: "Headline of study",
  description: "Description of the study",
  showPicture: true,
  alternative: 'some Picture',
  icon: 'star_border',
  loading: false
};

export const withoutPicture = Template.bind({});
withoutPicture.args = {
  image: "assets/blabla.jpg",
  width: 300,
  height: 300,
  headline: "Headline of study",
  description: "Description of the study",
  showPicture: false,
  icon: 'star_border',
  loading: false
};

export const loadPicture = Template.bind({});
loadPicture.args = {
  image: "assets/blabla.jpg",
  width: 300,
  height: 300,
  headline: "Headline of study",
  description: "Description of the study",
  showPicture: false,
  icon: 'star_border',
  loading: true
};

