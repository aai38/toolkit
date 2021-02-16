// YourComponent.stories.tsx
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


// This default export determines where your story goes in the story list
@Component({
  selector: 'storybookInput',
  template: `
    <ion-item>
      <ion-label>Search</ion-label>
      <ion-input value="Test" data-cy="test"></ion-input>
    </ion-item>
    `,
  styleUrls: ['./input.css'],
})
export default class InputComponent {
    public name: string = '';
}
