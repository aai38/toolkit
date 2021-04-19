import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-states',
  templateUrl: './empty-states.component.html',
  styleUrls: ['./empty-states.css'],
})
export class EmptyStatesComponent  {

  constructor() { }
  
  @Input()
  type: 'studies' | 'info' | 'news';

  @Input()
  emptyLabel?: string;

  @Input()
  width?: number;
  @Input()
  height?: number;
  @Input()
  image?: string;
  @Input()
  alternative: string;
  @Input()
  src: string;
}
