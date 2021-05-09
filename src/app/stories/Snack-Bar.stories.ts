// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
  title: 'High-Order Components/SnackBar',
  component: SnackBarComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [SnackBarComponent],
      imports: [IonicModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
  
} as Meta;

const Template: Story<SnackBarComponent> = (args) => ({
  component: SnackBarComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  actionValue : "Action",
  messageValue: "Message",
};

export const TimeLimitedSnackbar = Template.bind({});
TimeLimitedSnackbar.args = {
  actionValue : "",
  messageValue: "Snackbar is shown for 3 seconds",
};
