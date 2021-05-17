// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
  title: 'Basic Components/Expansion Panel',
  component: ExpansionPanelComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [ExpansionPanelComponent],
      imports: [IonicModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
  
} as Meta;

const Template: Story<ExpansionPanelComponent> = (args) => ({
  component: ExpansionPanelComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
    content : 'Content of the panel',
    title: 'Panel',
    description: 'Description of the panel',
    selfaware: false,
    panelOpenState: false,
    hideToggle: false,
    icon: "account_circle",
    disabled: false
    
};

export const Selfaware = Template.bind({});
Selfaware.args = {
    content : 'Content of the panel',
    title: 'Selfaware Panel',
    description: 'Description of the panel',
    selfaware: true,
    panelOpenState: false,
    hideToggle: false,
    icon: "account_circle",
    disabled: false
    
};

export const Disabled = Template.bind({});
Disabled.args = {
    content : 'Content of the panel',
    title: 'Selfaware Panel',
    description: 'Description of the panel',
    selfaware: true,
    panelOpenState: false,
    hideToggle: false,
    icon: "account_circle",
    disabled: true
    
};
