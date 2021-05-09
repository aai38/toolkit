// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from '../input/input.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { TabsComponent } from '../tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
  title: 'High-Order Components/Tabs',
  component: TabsComponent,
  argTypes: {
    color: {
        control: {
          type: 'radio',
          options: ['basic','primary', 'warn', 'accent']
        }
      },
      backgroundColor: {
        control: {
          type: 'radio',
          options: ['basic','primary', 'warn', 'accent']
        }
      },
  },
  decorators: [
    moduleMetadata({
      declarations: [TabsComponent],
      imports: [IonicModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
  
} as Meta;

const Template: Story<TabsComponent> = (args) => ({
  component: TabsComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
     tabs:  [
        { icon: 'favorite', content: 'Content 1', label: 'Tab 1'},
        { icon: 'share', content: 'Content 2', label: 'Tab 2'},
        { icon: 'star', content: 'Content 3', label: 'Tab 3'}
      ],
      backgroundColor: '',
      color: ''
};

export const MoreTabs = Template.bind({});
MoreTabs.args = {
     tabs:  [
        { icon: 'favorite', content: 'my Favorites', label: ''},
        { icon: 'share', content: 'share with Friends..', label: ''},
        { icon: 'star', content: 'also favorites', label: ''},
        { icon: 'menu', content: 'name', label: ''},
        { icon: 'home', content: 'some info', label: ''}
      ],
      backgroundColor: 'primary',
      color: ''
};
