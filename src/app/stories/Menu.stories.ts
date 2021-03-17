// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import IonMenuComponent from '../ion-menu/ion-menu.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';


export default {
  title: 'Standard-Components/Menu',
  component: IonMenuComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [IonMenuComponent],
      imports: [IonicModule, ReactiveFormsModule, MaterialModule, CommonModule],
    }),
  ],
  
} as Meta;

const Template: Story<IonMenuComponent> = (args) => ({
  component: IonMenuComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  required: true,
  backgroundColor: "white"
};
