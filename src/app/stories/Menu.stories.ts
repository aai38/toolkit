// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import IonMenuComponent from '../ion-menu/ion-menu.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export default {
  title: 'Standard-Components/Menu',
  component: IonMenuComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [IonMenuComponent],
      imports: [IonicModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
  
} as Meta;

const Template: Story<IonMenuComponent> = (args) => ({
  component: IonMenuComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  menu_icon: 'menu',
  items: [
    {title: 'Favorites', icon: 'favorite'},
    {title: 'Share', icon: 'share'},
    {title: 'Star', icon: 'star'}
  ],
  header1: 'Items',
  header2: ''
};

export const MenuWithTwoParts = Template.bind({});
MenuWithTwoParts.args = {
  menu_icon: 'menu',
  items: [
    {title: 'Favorites', icon: 'favorite'},
    {title: 'Share', icon: 'share'},
    {title: 'Star', icon: 'star'}
  ],
  itemsSecond: [
    {title: 'Profil', icon: 'account_circle'},
    {title: 'Info', icon: 'info'},
    {title: 'Home', icon: 'home'}
  ],
  header1: 'Items',
  header2: 'Other Items'
};
