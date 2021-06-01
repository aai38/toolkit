// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {MenuComponent} from '../menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';



export default {
  title: 'High-Order Components/Menu',
  component: MenuComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [MenuComponent],
      imports: [IonicModule, MaterialModule, BrowserAnimationsModule, RouterModule.forRoot([{
        path: '', loadChildren: () => import('../app.module').then(m => m.AppModule) }, ],
         {
        useHash: true,
      }
    )],
    providers: [
      {provide: APP_BASE_HREF, useValue:'/' }
    ]
    })],
  
} as Meta;

const Template: Story<MenuComponent> = (args) => ({
  component: MenuComponent,
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
