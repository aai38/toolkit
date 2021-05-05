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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicModule.forRoot(),
    IonContent,
    MaterialModule,
    ChartsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [NewsComponent],
  exports: [
    NewsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsPageModule {}
