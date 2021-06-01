import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';
import { NgCalendarModule } from 'ionic2-calendar';
import { ChartsModule } from 'ng2-charts';
import ButtonComponent from '../button/button.component';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { ExpansionPanelModule } from '../expansion-panel/expansion-panel.module';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { MaterialModule } from '../material.module';
import { AccordionComponent } from './accordion.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ExpansionPanelModule,
        NgCalendarModule,
        IonicModule,
        IonicModule.forRoot(),
        MaterialModule,
        CalendarModule,
        ChartsModule,
        ReactiveFormsModule,
    ],
    
  declarations: [
    AccordionComponent,
  ],
  exports: [
    AccordionComponent,
  ]
})
export class AccordionModule { }
