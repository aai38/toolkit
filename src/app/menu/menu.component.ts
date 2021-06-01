import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Items {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  {

  constructor(private menu: MenuController) { }
  showFiller = false;
  @Input() menu_icon: string = 'menu';
  @Input() items: Items[] = [
    {title: 'First', icon: 'favorite',  link:"/news"},
    {title: 'Second', icon: 'share' ,link:""},
    {title: 'Third', icon: 'star',  link:""}
  ];
  @Input() itemsSecond: Items[] = [
    {title: 'First', icon: 'favorite', link:""},
    {title: 'Second', icon: 'share', link:""},
    {title: 'Third', icon: 'star', link:""}
  ];

  @Input() header1: string ='Items';
  @Input() header2: string;
}



