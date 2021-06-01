import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';
import { NgCalendarModule } from 'ionic2-calendar';
import { ChartsModule } from 'ng2-charts';
import HomePage from '../home/home.page';
import { MaterialModule } from '../material.module';
import { MenuComponent } from './menu.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgCalendarModule,
        IonicModule,
        IonicModule.forRoot(),
        MaterialModule,
        CalendarModule,
        RouterModule.forChild([
            {
              path: '',
              component: MenuComponent
            }
          ]),
        ChartsModule,
        ReactiveFormsModule,
    ],
    
  declarations: [
    MenuComponent,
  ],
  exports: [
    MenuComponent,
  ]
})
export class MenuModule { }
