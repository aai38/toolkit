import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.css'],
})
export default class CardComponent  {

  constructor() { }
  @Input()
  backgroundColor?: string;


}
