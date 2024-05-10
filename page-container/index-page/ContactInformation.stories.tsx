import { Story, Meta } from '@storybook/react';
import ContactInformation from './ContactInformation';

export default {
  title: 'index/ContactInformation',
  component: ContactInformation
} as Meta;

const Template: Story = () => <ContactInformation />;

export const Default = Template.bind({});
