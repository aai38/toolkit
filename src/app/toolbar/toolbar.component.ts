import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuController } from '@ionic/angular';

interface Items {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export default class ToolbarComponent  {

  showFiller = false;
  @Input() items: Items[] = [
    {title: 'First', icon: 'favorite', link:"/news"},
    {title: 'Second', icon: 'share', link:""},
    {title: 'Third', icon: 'star', link:""}
  ];
  @Input() itemsSecond: Items[] = [
    {title: 'First', icon: 'favorite', link:""},
    {title: 'Second', icon: 'share', link:""},
    {title: 'Third', icon: 'star', link:""}
  ];

  @Input() header1: string ='Items';
  @Input() header2: string;
  @Input() showContent: boolean = false;
  @Input() disabled: boolean = false;

  
  @Input() color: string;
  @Input() menu_icon: string = 'menu';
  @Input() icon1: string = 'favorite';
  @Input() icon2: string = 'share';
  @Input() title: string = 'My App';

  constructor() { }
 
  

}
