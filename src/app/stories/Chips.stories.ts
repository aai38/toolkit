// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {ChipsComponent} from '../chips/chips.component';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
  title: 'Standard-Components/Chips',
  component: ChipsComponent,
  argTypes: {
    color: {
        control: {
          type: 'radio',
          options: ['basic','primary', 'warn', 'accent']
        }
      },
  },
  decorators: [
    moduleMetadata({
      declarations: [ChipsComponent],
      imports: [IonicModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
  
} as Meta;

const Template: Story<ChipsComponent> = (args) => ({
  component: ChipsComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
    visible: true,
    selectable:  true,
    removable: false,
    addOnBlur: true,
    label: 'Enter Car',
    placeholder: 'New Car...',
    chips: [
      {name: 'Audi', colorChip:undefined, selected:false},
      {name: 'BMW', colorChip:undefined, selected:false},
      {name: 'Mercedes', colorChip:undefined, selected:false},
    ]
};

export const ColoredRemovableChips = Template.bind({});
ColoredRemovableChips.args = {
    visible: true,
    selectable:  true,
    removable: true,
    addOnBlur: true,
    label: 'Enter Fruit',
    placeholder: 'New Fruit...',
    icon: 'delete',
    chips: [
      {name: 'Lemon', colorChip:undefined, selected:false},
      {name: 'Lime', colorChip:'primary', selected:true},
      {name: 'Apple', colorChip:'accent', selected:true},
    ]
};


