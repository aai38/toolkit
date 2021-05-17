// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { StepperComponent } from '../stepper/stepper.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export default {
  title: 'High-Order Components/Stepper',
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

export const Vertical = Template.bind({});
Vertical.args = {
  isLinear : false,

  backButtonLabel:  "Back",
  nextButtonLabel: "Next",
  placeholder: "Adress",
  horizontal: false,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  isLinear : false,

  backButtonLabel:  "Back",
  nextButtonLabel: "Next",
  placeholder: "Adress",
  horizontal: true,
};
