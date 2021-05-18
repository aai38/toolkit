import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {

  @Input() form: FormArray;
  @Input() isLinear = false;
  @Input() formGroup: FormGroup;

  @Input() backButtonLabel: string = "Back";
  @Input() nextButtonLabel: string = "Next";
  @Input() placeholder: string = "Adress";
  @Input() value: string;

  @Input() horizontal: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  
    ngOnInit() {
      this.formGroup = this._formBuilder.group({
        form : this._formBuilder.array([this.init()])
      }) 
      console.log(this.form);
      console.log(this.formGroup);
      this.addItem();
    }
  
    init(){
      return this._formBuilder.group({
        cont :new FormControl('', [Validators.required]),
      })
    }
  
    addItem(){
      this.form = this.formGroup.get('form') as FormArray;
      this.form.push(this.init());
      console.log(this.form);
    
  }
}


