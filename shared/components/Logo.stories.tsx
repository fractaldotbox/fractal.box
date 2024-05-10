import { Story, Meta } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'shared/Logo',
  component: Logo
} as Meta;

const Template: Story = () => <Logo />;

export const Default = Template.bind({});
