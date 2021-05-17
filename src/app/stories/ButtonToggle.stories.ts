// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { ButtonToggleComponent } from '../button-toggle/button-toggle.component';
import { Button } from 'selenium-webdriver';


export default {
  title: 'Basic Components/Button Toggle',
  component: ButtonToggleComponent,
  argTypes: {
    appearance: {
        control: {
          type: 'radio',
          options: ['', 'legacy']
        }
      },
  },
  decorators: [
    moduleMetadata({
      declarations: [ButtonToggleComponent],
      imports: [IonicModule, MaterialModule],
    }),
  ],
  
} as Meta;

const Template: Story<ButtonToggleComponent> = (args) => ({
  component: ButtonToggleComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  values: ["Bold", "Italic", "Underline"],
  selectMultiple: false,
  appearance: ""
};



export const Legacy = Template.bind({});
Legacy.args = {
  values: ["Bold", "Italic", "Underline"],
  selectMultiple: true,
  appearance: "legacy"
};

