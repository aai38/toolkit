import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {

  constructor() { }

  @Input() labels: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  @Input() radioButtonsLabel: string = "Pick one Option";
  @Input() color: string = 'primary';
  @Input() disabled: boolean = false;


}
