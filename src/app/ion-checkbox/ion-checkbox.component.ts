import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-checkbox',
  templateUrl: './ion-checkbox.component.html',
  styleUrls: ['./ion-checkbox.component.scss'],
})
export default class IonCheckboxComponent {

  constructor() { }
  @Input()
  label? = 'string';
  
  @Input()
  checked? = false;

  @Input()
  disabled? = false;


  @Input()
  color?: string;


  

}
