// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from '../input/input.component';
import CardComponent from '../card/card.component'
import Button from '../button/button.component'
import IonMenuComponent from '../ion-menu/ion-menu.component'
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import  HomePage  from '../home/home.page';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import IonDatetime from '../ion-datetime/ion-datetime.component'
import ToolbarComponent  from '../toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { NewsComponent } from '../news/news.component';


export default {
  title: 'Pages/NewsPage',
  component: NewsComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [NewsComponent, Input, CardComponent, Button, IonMenuComponent, IonDatetime, ToolbarComponent],
      imports: [IonicModule,  MaterialModule, CommonModule, ReactiveFormsModule, BrowserAnimationsModule, RouterModule.forRoot([{
        path: '', component: NewsComponent },
      {path: 'news', component:NewsComponent}],
         {
        useHash: true,
      },
    )],
    providers: [
      {provide: APP_BASE_HREF, useValue:'/' }
    ],
    
    }),
  ],
  
} as Meta;

const Template: Story<NewsComponent> = (args) => ({
  component: NewsComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
};
