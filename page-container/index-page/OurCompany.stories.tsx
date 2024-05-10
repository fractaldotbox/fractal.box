import { Story, Meta } from '@storybook/react';
import OurCompany from './OurCompany';

export default {
  title: 'index/OurCompany',
  component: OurCompany
} as Meta;

const Template: Story = () => <OurCompany />;

export const Default = Template.bind({});
