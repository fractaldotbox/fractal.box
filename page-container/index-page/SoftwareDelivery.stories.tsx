import { Story, Meta } from '@storybook/react';
import SoftwareDelivery from './SoftwareDelivery';

export default {
  title: 'index/SoftwareDelivery',
  component: SoftwareDelivery
} as Meta;

const Template: Story = () => <SoftwareDelivery />;

export const Default = Template.bind({});
