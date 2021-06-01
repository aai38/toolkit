import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';
import { NgCalendarModule } from 'ionic2-calendar';
import { ChartsModule } from 'ng2-charts';
import ButtonComponent from '../button/button.component';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { MaterialModule } from '../material.module';
import { ExpansionPanelComponent } from './expansion-panel.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgCalendarModule,
        IonicModule,
        IonicModule.forRoot(),
        MaterialModule,
        CalendarModule,
        ChartsModule,
        ReactiveFormsModule,
    ],
    
  declarations: [
    ExpansionPanelComponent,
  ],
  exports: [
    ExpansionPanelComponent,
  ]
})
export class ExpansionPanelModule { }
