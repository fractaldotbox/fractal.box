import { Story, Meta } from '@storybook/react';
import TechleadaaS from './TechleadaaS';

export default {
  title: 'index/TechleadaaS',
  component: TechleadaaS
} as Meta;

const Template: Story = () => <TechleadaaS />;

export const Default = Template.bind({});
