import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  {

  constructor() { }
 
  @Input() color: string;
  @Input() menu_icon: string = 'menu';
  @Input() icon1: string = 'favorite';
  @Input() icon2: string = 'share';
  @Input() title: string = 'My App';

  @Input() showIcons: boolean = true;
  @Input() showIcon2: boolean = false;

}
