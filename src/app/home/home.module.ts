import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonDatetime, IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import HomePage  from './home.page';
import CardComponent from '../card/card.component';
import Input from '../input/input.component';
import IonDate from '../ion-datetime/ion-datetime.component'
import {MaterialModule} from '../material.module';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { ChartsModule } from 'ng2-charts';



import ButtonComponent from '../button/button.component';
import IonMenuComponent from '../ion-menu/ion-menu.component'
import IonCheckboxComponent from '../ion-checkbox/ion-checkbox.component'
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
    RouterModule,
    FormArray,
    FormGroup,
    FormBuilder
  ],
  declarations: [HomePage,ToolbarComponent, IonMenuComponent, TabsComponent, StepperComponent, ChipsComponent, SliderComponent, SlideToggleComponent, LoadingComponent, SelectComponent, EmptyStatesComponent, RadioButtonComponent, CardComponent, Input, ButtonComponent, IonCheckboxComponent, IonDate, ChartComponent, DialogElement, SnackBarComponent],
  exports: [
    HomePage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
