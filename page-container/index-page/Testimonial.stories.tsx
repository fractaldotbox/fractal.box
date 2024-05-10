import { Story, Meta } from '@storybook/react';
import Testimonial from './Testimonial';

export default {
  title: 'index/Testimonial',
  component: Testimonial
} as Meta;

const Template: Story = () => <Testimonial />;

export const Default = Template.bind({});
