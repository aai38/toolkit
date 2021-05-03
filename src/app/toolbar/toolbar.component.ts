import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuController } from '@ionic/angular';

interface Items {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export default class ToolbarComponent  {

  showFiller = false;
  @Input() items: Items[] = [
    {title: 'First', icon: 'favorite'},
    {title: 'Second', icon: 'share'},
    {title: 'Third', icon: 'star'}
  ];
  @Input() itemsSecond: Items[] = [
    {title: 'First', icon: 'favorite'},
    {title: 'Second', icon: 'share'},
    {title: 'Third', icon: 'star'}
  ];

  @Input() header1: string ='Items';
  @Input() header2: string;

  

  constructor(private menu: MenuController) { }
 
  @Input() color: string;
  @Input() menu_icon: string = 'menu';
  @Input() icon1: string = 'favorite';
  @Input() icon2: string = 'share';
  @Input() title: string = 'My App';
  

}
