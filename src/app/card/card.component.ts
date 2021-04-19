import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import ButtonComponent from '../button/button.component';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.css'],
})
export default class CardComponent  {

  constructor() { }
  @Input()
  image?: string;
  @Input()
  width?: number;
  @Input()
  height?: number;
  @Input()
  headline?: string;
  @Input()
  description?: string;
  @Input()
  showPicture?: boolean;

}
