import { Story, Meta } from '@storybook/react';
import DeveloperSupport from './DeveloperSupport';

export default {
  title: 'index/DeveloperSupport',
  component: DeveloperSupport
} as Meta;

const Template: Story = () => <DeveloperSupport />;

export const Default = Template.bind({});
