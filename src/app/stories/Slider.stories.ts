// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata } from '@storybook/angular';
import {MaterialModule} from '../material.module';
import { SliderComponent } from '../slider/slider.component';


export default {
  title: 'Basic Components/Slider',
  component: SliderComponent,
  argTypes: {
    tickInterval: {control: 'number'},
  },
  decorators: [
    moduleMetadata({
      declarations: [SliderComponent],
      imports: [IonicModule, MaterialModule],
    }),
  ],
  
} as Meta;

const Template: Story<SliderComponent> = (args) => ({
  component: SliderComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {
  minimalValue: 0,
  maximalValue: 10,
  value: 0,
  step: 1,
  inverted: false,
  vertical: false,
  thumblabel: false,
  color: "accent"
};

export const VerticalInvertedSlider = Template.bind({});
VerticalInvertedSlider.args = {
  minimalValue: 0,
  maximalValue: 20,
  value: 4,
  step: 5,
  inverted: true,
  vertical: true,
  thumblabel: false,
  color: "accent"
};

export const SliderWithThumblabel = Template.bind({});
SliderWithThumblabel.args = {
  minimalValue: 0,
  maximalValue: 20,
  value: 4,
  step: 1,
  inverted: false,
  vertical: false,
  thumblabel: true,
  color: "primary"
};