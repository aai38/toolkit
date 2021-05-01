import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {


  @Input() isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  @Input() firstStepLabel: string = "Fill out your name";
  @Input() firstStepInputLabel: string = "Name";
  @Input () firstStepInputPlaceholder: string = "Prename Lastname";

  @Input() secondStepLabel: string = "Fill out your Adress";
  @Input() secondStepInputLabel: string = "Adress";
  @Input () secondStepInputPlaceholder: string = "Adress";

  @Input() thirdStepLabel: string = "Done";
  @Input() doneText: string = "You are done now";

  @Input() backButtonLabel: string = "Back";
  @Input() nextButtonLabel: string = "Next";
  @Input() resetButtonLabel: string = "Reset";

  @Input() horizontal: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
