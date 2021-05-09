// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import  ToolbarComponent  from '../toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import IonMenuComponent from '../ion-menu/ion-menu.component';
import CardComponent from '../card/card.component';
import ButtonComponent from '../button/button.component';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';



export default {
  title: 'High-Order Components/Toolbar',
  component: ToolbarComponent,
  argTypes: {
    color: {
        control: {
          type: 'radio',
          options: ['basic', 'primary', 'warn', 'accent']
        }
      },
  },
  decorators: [
    moduleMetadata({
      declarations: [ToolbarComponent, IonMenuComponent, CardComponent, ButtonComponent],
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

const Template: Story<ToolbarComponent> = (args) => ({
  component: ToolbarComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  title : 'My App',
  icon1: 'favorite',
  icon2: '',
  menu_icon: 'menu',
  color: 'basic',
  showContent: false,
  disabled: true

};

export const TwoIcons = Template.bind({});
TwoIcons.args = {
  title : 'My App',
  icon1: 'favorite',
  icon2: 'share',
  menu_icon: 'home',
  color: 'primary',
  showContent: false,
  disabled: true


};

export const ToolbarWithMenuAndContent = Template.bind({});
ToolbarWithMenuAndContent.args = {
  title : 'My App',
  icon1: 'favorite',
  icon2: 'share',
  menu_icon: 'home',
  color: 'primary',
  showContent: true,
  disabled: false


};
