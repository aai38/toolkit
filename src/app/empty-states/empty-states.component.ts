import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-states',
  templateUrl: './empty-states.component.html',
  styleUrls: ['./empty-states.css'],
})
export class EmptyStatesComponent  {

  constructor() { }
  

  @Input()
  emptyLabel?: string;

  @Input()
  width?: number;
  @Input()
  height?: number;
  @Input()
  icon: string = 'broken_image';
  @Input()
  buttonLabel: string = 'go to main page';

}
