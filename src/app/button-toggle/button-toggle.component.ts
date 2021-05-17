import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent implements OnInit {


  @Input() values: ["Bold", "Italic", "Underline"];
  @Input() selectMultiple = false;
  @Input() appearance: "";
  constructor() { }

  ngOnInit() {}

}
