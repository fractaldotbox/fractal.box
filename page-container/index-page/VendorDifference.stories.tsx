import { Story, Meta } from '@storybook/react';
import VendorDifference from './VendorDifference';

export default {
  title: 'index/VendorDifference',
  component: VendorDifference
} as Meta;

const Template: Story = () => <VendorDifference />;

export const Default = Template.bind({});
