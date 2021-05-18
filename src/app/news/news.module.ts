import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonDatetime, IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import CardComponent from '../card/card.component';
import Input from '../input/input.component';
import IonDate from '../ion-datetime/ion-datetime.component'
import {MaterialModule} from '../material.module';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { ChartsModule } from 'ng2-charts';



import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { NewsPageRoutingModule } from './news-routing.module';
import ToolbarComponent from '../toolbar/toolbar.component';
import ButtonComponent from '../button/button.component';
import IonMenuComponent from '../ion-menu/ion-menu.component';


@NgModule({
  imports: [
    CommonModule,
    NewsPageRoutingModule,
    FormsModule,
    IonicModule,
    IonicModule.forRoot(),
    MaterialModule,
    ChartsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsComponent
      }
    ]),
  ],
  declarations: [NewsComponent, ToolbarComponent, ButtonComponent, IonMenuComponent, CardComponent],
  exports: [
    NewsComponent,
    ToolbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsPageModule {}
