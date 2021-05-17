// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from '../input/input.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { AccordionComponent } from '../accordion/accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';


export default {
  title: 'High-Order Components/Accordion',
  component: AccordionComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [AccordionComponent, ExpansionPanelComponent],
      imports: [IonicModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
  
} as Meta;

const Template: Story<AccordionComponent> = (args) => ({
  component: AccordionComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  multi: false,
};

export const Multi = Template.bind({});
Multi.args = {
  multi: true
};