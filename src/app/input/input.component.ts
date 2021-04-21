// YourComponent.stories.tsx

import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


// This default export determines where your story goes in the story list
@Component({
  selector: 'storybookInput',
  templateUrl: './input.component.html',
  styleUrls: ['./input.css'],
})
export default class InputComponent {
    @Input()
    placeholder:string = 'Type anything...';
    @Input()
    label = 'Search';
    @Input()
    value= '';
}
