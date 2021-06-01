import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';
import { NgCalendarModule } from 'ionic2-calendar';
import { ChartsModule } from 'ng2-charts';
import { Button } from 'selenium-webdriver';
import ButtonComponent from '../button/button.component';
import { ButtonModule } from '../button/button.module';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { InputModule } from '../input/input.module';
import { MaterialModule } from '../material.module';
import Datepicker from './datepicker.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        InputModule,
        NgCalendarModule,
        IonicModule,
        IonicModule.forRoot(),
        MaterialModule,
        CalendarModule,
        ChartsModule,
        ReactiveFormsModule,
    ],
    
  declarations: [
    Datepicker,
  ],
  exports: [
    Datepicker,
  ]
})
export class DatepickerModule { }
