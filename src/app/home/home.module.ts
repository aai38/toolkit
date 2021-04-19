import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonDatetime, IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import HomePage  from './home.page';
import CardComponent from '../card/card.component';
import Input from '../input/input.component';
import IonDate from '../ion-datetime/ion-datetime.component'
import {MaterialModule} from '../material.module';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { ChartsModule } from 'ng2-charts';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { HomePageRoutingModule } from './home-routing.module';
import ButtonComponent from '../button/button.component';
import IonMenuComponent from '../ion-menu/ion-menu.component'
import IonCheckboxComponent from '../ion-checkbox/ion-checkbox.component'
import { ChartComponent } from '../chart/chart.component';
import { MatMenu } from '@angular/material/menu';
import { DialogElementsExample } from '../dialog/dialog.component';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { MatIconModule } from '@angular/material/icon';
import { EmptyStatesComponent } from '../empty-states/empty-states.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicModule.forRoot(),
    HomePageRoutingModule,
    MaterialModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, EmptyStatesComponent, CardComponent, Input, ButtonComponent, IonMenuComponent, IonCheckboxComponent, IonDate, ChartComponent, DialogElementsExample, DoughnutChartComponent],
  exports: [
    HomePage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
