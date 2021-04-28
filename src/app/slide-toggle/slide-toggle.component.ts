import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
})
export class SlideToggleComponent implements OnInit {

  constructor() { }

  @Input() color: string;
  @Input() label: string = 'Slide me';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  ngOnInit() {}

}
