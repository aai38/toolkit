import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-ion-datetime',
  templateUrl: './ion-datetime.component.html',
  styleUrls: ['./ion-datetime.component.scss'],
})
export default class IonDate  {

  date = new FormControl(new Date());

  @Input()
    label?: string = 'Choose date';


}
