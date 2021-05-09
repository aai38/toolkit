import { NgModule, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import ButtonComponent from '../button/button.component';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.css'],
})
export default class CardComponent implements OnInit {

  constructor() { }
  public labelNew: string;

  @Input()
  image?: string = '../assets/example.jpg';
  @Input()
  headline?: string = 'Example headline';
  @Input()
  description?: string = 'Example description';
  @Input()
  loading: boolean = false;
  @Input()
  alternative?: string = 'some picture';

  @Input()
  label: string ='View';
  @Input()
  icon: string = 'star_border';

  @Output()
  onClick = new EventEmitter<Event>();

  ngOnInit() {
    this.labelNew = this.label;
  }
}
