import { Component, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ion-datetime',
  templateUrl: './ion-datetime.component.html',
  styleUrls: ['./ion-datetime.component.scss'],
})
export default class IonDate  {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()});

  date = new FormControl(new Date());

  @Input()
  label: string = 'Choose date';
  @Input()
  placeholder_startDate : string = 'Start Date';

  @Input()
  placeholder_endDate : string = 'End Date';
  @Input()
  label_cancelButton: string = 'Cancel';
  @Input()
  label_applyButton: string = 'Apply';

  @Input()
  color_input: string ='primary';
  @Input()
  color_datepicker: string = 'primary';
  @Input()
  completelyDisabled: boolean = false;
  @Input()
  popupDisabled: boolean = false;
  @Input()
  showRange: boolean= true;
  @Input()
  toggleIcon: string= 'keyboard_arrow_down';

}
