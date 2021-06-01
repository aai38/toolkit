import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonDatetime, IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import CardComponent from '../card/card.component';
import Input from '../input/input.component';
import IonDate from '../datepicker/datepicker.component'
import {MaterialModule} from '../material.module';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { ChartsModule } from 'ng2-charts';



import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { NewsPageRoutingModule } from './news-routing.module';
import ToolbarComponent from '../toolbar/toolbar.component';
import ButtonComponent from '../button/button.component';
import {MenuComponent} from '../menu/menu.component';
import { ButtonModule } from '../button/button.module';
import { MenuModule } from '../menu/menu.module';
import { CardModule } from '../card/card.module';
import { ToolbarModule } from '../toolbar/toolbar.module';


@NgModule({
  imports: [
    CommonModule,
    NewsPageRoutingModule,
    FormsModule,
    IonicModule,
    CardModule,
    ToolbarModule,
    IonicModule.forRoot(),
    MaterialModule,
    ButtonModule,
    ChartsModule,
    MenuModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsComponent
      }
    ]),
  ],
  declarations: [NewsComponent],
  exports: [
    NewsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsPageModule {}
