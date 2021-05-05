import { Component, Input, OnInit } from '@angular/core';

interface Tabs {
  icon: string;
  content: string;
  label: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor() { }

  @Input() tabs: Tabs[] = [
    { icon: 'favorite', content: 'Content 1', label: 'Tab 1'},
    { icon: 'share', content: 'Content 2', label: 'Tab 2'},
    { icon: 'star', content: 'Content 3,', label: 'Tab 3'}
  ];
  @Input() backgroundColor: string;
  @Input() color: string;
  
  ngOnInit() {}

}
