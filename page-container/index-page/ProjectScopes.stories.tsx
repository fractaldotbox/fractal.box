import { Story, Meta } from '@storybook/react';
import ProjectScopes from './ProjectScopes';

export default {
  title: 'index/ProjectScopes',
  component: ProjectScopes
} as Meta;

const Template: Story = () => <ProjectScopes />;

export const Default = Template.bind({});
