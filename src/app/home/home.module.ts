import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import CardComponent from '../card/card.component';
import Input from '../stories/input.component';
import {MaterialModule} from '../material.module';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicModule.forRoot(),
    HomePageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, CardComponent, Input],
  exports: [
    HomePage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
