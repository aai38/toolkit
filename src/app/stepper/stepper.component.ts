import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {

  test = new FormControl('');
  steps: FormArray;
  @Input() isLinear = false;
  firstFormGroup: FormGroup;
  @Input() firstStepLabel: string = "Fill out your name";
  @Input() firstStepInputLabel: string = "Name";
  @Input () firstStepInputPlaceholder: string = "Prename Lastname";

  @Input() secondStepLabel: string = "Fill out your Adress";
  @Input() secondStepInputLabel: string = "Adress";
  @Input () secondStepInputPlaceholder: string = "Adress";

  @Input() doneStepLabel: string = "Done";
  @Input() doneText: string = "You are done now";

  @Input() backButtonLabel: string = "Back";
  @Input() nextButtonLabel: string = "Next";
  @Input() resetButtonLabel: string = "Reset";

  @Input() horizontal: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  
    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        form : this._formBuilder.array([this.init()])
      }) 
      this.addItem();
    }
  
    init(){
      return this._formBuilder.group({
        cont :new FormControl('', [Validators.required]),
      })
    }
  
    addItem(){
      this.steps = this.firstFormGroup.get('steps') as FormArray;
      this.steps.push(this.init());
    
  }
}


