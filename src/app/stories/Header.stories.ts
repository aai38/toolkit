import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from '../button/button.component';
import Header from '../storybook_example_header/header.component';
import {MaterialModule} from '../material.module';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'Storybook-Example/Header',
  component: Header,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule, MaterialModule, MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<Header> = (args: Header) => ({
  component: Header,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
