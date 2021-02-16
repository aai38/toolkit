// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import CardComponent from '../card/card.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Example/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [ CardComponent ],
      imports: [IonicModule.forRoot()],
    }),
  ],
} as Meta;

const Template: Story<CardComponent> = (args) => ({
  component: CardComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  backgroundColor: "black"
};
