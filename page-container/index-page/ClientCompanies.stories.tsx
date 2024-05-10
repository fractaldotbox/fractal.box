import { Story, Meta } from '@storybook/react';
import ClientCompanies from './ClientCompanies';

export default {
  title: 'index/ClientCompanies',
  component: ClientCompanies
} as Meta;

const Template: Story = () => <ClientCompanies />;

export const Default = Template.bind({});
