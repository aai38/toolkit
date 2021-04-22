import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent  {

  constructor() { }
  @Input() options: Options[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  @Input() requiredSelection: boolean = false;
  @Input() label: string= "Food";

  @Input() showHint: boolean = true;
  @Input() hint: string ="hint";

  //selectFormControl = new FormControl('', Validators.required);

}
