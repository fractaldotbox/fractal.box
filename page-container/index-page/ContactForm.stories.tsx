import { Story, Meta } from '@storybook/react';
import ContactForm from './ContactForm';

export default {
  title: 'index/ContactForm',
  component: ContactForm
} as Meta;

const Template: Story = () => <ContactForm />;

export const Default = Template.bind({});
