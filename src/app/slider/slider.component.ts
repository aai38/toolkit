import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent  {

  constructor() { }

  @Input() minimalValue: number=0;
  @Input() maximalValue: number=10;
  @Input() value:number= 0;
  @Input() step: number=1;
  @Input() vertical: boolean=false;
  @Input() inverted: boolean=false;
  @Input() thumblabel: boolean=false;
  @Input() tickInterval: number;
  @Input() color: string="accent";


}
