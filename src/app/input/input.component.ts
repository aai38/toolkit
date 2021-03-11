// YourComponent.stories.tsx

import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


// This default export determines where your story goes in the story list
@Component({
  selector: 'storybookInput',
  template: `
    <ion-item>
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <mat-label>{{ label }}</mat-label>
        <input matInput [placeholder]=placeholder [value]=value>
      </mat-form-field>
    </form>
    </ion-item>
    `,
  styleUrls: ['./input.css'],
})
export default class InputComponent {
    @Input()
    placeholder?= 'string';
    @Input()
    label ?= 'string';
    @Input()
    value?= 'string'
}
