import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export default class CheckboxComponent {

  constructor() { }
  @Input()
  label? = 'string';
  
  @Input()
  checked: boolean = false;

  @Input()
  disabled: boolean = false;


  @Input()
  color?: string;


  

}
