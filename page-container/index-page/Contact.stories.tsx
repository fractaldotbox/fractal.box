import { Story, Meta } from '@storybook/react';
import Contact from './Contact';

export default {
  title: 'index/Contact',
  component: Contact
} as Meta;

const Template: Story = () => <Contact />;

export const Default = Template.bind({});
