import { Story, Meta } from '@storybook/react';
import ComponentTemplate from './ComponentTemplate';

export default {
  title: 'shared/ComponentTemplate',
  component: ComponentTemplate
} as Meta;

const Template: Story = () => <ComponentTemplate />;

export const Default = Template.bind({});
