// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommonModule } from '@angular/common';

import CardComponent from '../card/card.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { MatButtonModule } from '@angular/material/button';
import Button from '../button/button.component'; 
import ButtonStories from './Button.stories';


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
  backgroundColor: "black",
  image: "assets/blabla.jpg",
  width: 300,
  height: 300
};

export const WithoutImage = () => ({
template: ` <ion-card>
<ion-item>
    <ion-icon name="pin" slot="end"></ion-icon>

    <ion-label class="label" slot="start">Example headline for study</ion-label>
    
</ion-item>
<ion-card-content class="content">
     <br> There is the describtion of the study.
     <div style="text-align:right;">
     <storybook-button mat-button class="button" slot="end"></storybook-button>
     </div>

</ion-card-content>
</ion-card>`,
styleUrls: ['../card/card.css']
});

export const WithoutStudies = () => ({
  template: ` <ion-card>
  <ion-item>
  
      
  </ion-item>
  <ion-card-content class="content">
  <div style="text-align:center;">
  <ion-label class="label"> No studies available </ion-label>
  </div>
  </ion-card-content>
  </ion-card>`,
  styleUrls: ['../card/cardWithoutStudies.css']
  });


