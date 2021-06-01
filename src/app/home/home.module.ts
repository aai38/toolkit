import { NgModule,LOCALE_ID , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonDatetime, IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import HomePage  from './home.page';
import CardComponent from '../card/card.component';
import Input from '../input/input.component';
import Datepicker from '../datepicker/datepicker.component'
import {MaterialModule} from '../material.module';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { ChartsModule } from 'ng2-charts';


import {MenuComponent} from '../menu/menu.component'
import CheckboxComponent from '../checkbox/checkbox.component'
import { ChartComponent } from '../chart/chart.component';
import { MatMenu } from '@angular/material/menu';
import { DialogElement } from '../dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { EmptyStatesComponent } from '../empty-states/empty-states.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { SelectComponent } from '../select/select.component';
import  ToolbarComponent  from '../toolbar/toolbar.component';
import { LoadingComponent } from '../loading/loading.component';
import { SlideToggleComponent } from '../slide-toggle/slide-toggle.component';
import { SliderComponent } from '../slider/slider.component';
import { ChipsComponent } from '../chips/chips.component';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { TabsComponent } from '../tabs/tabs.component';
import { StepperComponent } from '../stepper/stepper.component';
import { RouterModule } from '@angular/router';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { TableComponent } from '../table/table.component';
import { ButtonToggleComponent } from '../button-toggle/button-toggle.component';
import { NewsComponent } from '../news/news.component';
import { HomePageRoutingModule } from './home-routing.module';
import {  CalendarModule } from 'ion2-calendar';
import { CalendarComponent } from '../calendar/calendar.component';
import { NgCalendarModule  } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ButtonModule } from '../button/button.module';
import { MenuModule } from '../menu/menu.module';
import { CardModule } from '../card/card.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { AccordionModule } from '../accordion/accordion.module';
import { ExpansionPanelModule } from '../expansion-panel/expansion-panel.module';
import { ButtonToggleModule } from '../button-toggle/button-toogle.module';
import { InputModule } from '../input/input.module';
import { ChartModule } from '../chart/chart.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { ChipsModule } from '../chips/chips.module';
registerLocaleData(localeDe);



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    MenuModule,
    CardModule,
    NgCalendarModule,
    InputModule,
    ExpansionPanelModule,
    ToolbarModule,
    HomePageRoutingModule,
    IonicModule,
    IonicModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
  ],
  declarations: [ HomePage],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ],
  exports: [
    HomePage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
