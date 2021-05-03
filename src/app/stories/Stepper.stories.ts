// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { StepperComponent } from '../stepper/stepper.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export default {
  title: 'Standard-Components/Stepper',
  component: StepperComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [StepperComponent],
      imports: [IonicModule, MaterialModule,  BrowserAnimationsModule, CommonModule, ReactiveFormsModule],
    }),
  ],
  
} as Meta;

const Template: Story<StepperComponent> = (args) => ({
  component: StepperComponent,
  props: args,
});

export const ThreeStepVertical = Template.bind({});
ThreeStepVertical.args = {
    
  firstStepLabel:  "Fill out your name",
  firstStepInputLabel: "Name",
  firstStepInputPlaceholder: "Prename Lastname",

  secondStepLabel: "Fill out your Adress",
  secondStepInputLabel:  "Adress",
  secondStepInputPlaceholder: "Adress",

  doneStepLabel: "Done",
  doneText: "You are done now",

  backButtonLabel: "Back",
  nextButtonLabel: "Next",
  resetButtonLabel: "Reset",

  horizontal: false
};

export const TwoStepHorizontal = Template.bind({});
TwoStepHorizontal.args = {
    
  firstStepLabel:  "Fill out your name",
  firstStepInputLabel: "Name",
  firstStepInputPlaceholder: "Prename Lastname",

  secondStepLabel: "",
  secondStepInputLabel:  "",
  secondStepInputPlaceholder: "",

  doneStepLabel: "Done",
  doneText: "You are done now",

  backButtonLabel: "Back",
  nextButtonLabel: "Next",
  resetButtonLabel: "Reset",

  horizontal: true
};
