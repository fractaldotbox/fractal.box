import { Story, Meta } from '@storybook/react';
import TeamUpWithTechlead from './TeamUpWithTechlead';

export default {
  title: 'index/TeamUpWithTechlead',
  component: TeamUpWithTechlead
} as Meta;

const Template: Story = () => <TeamUpWithTechlead />;

export const Default = Template.bind({});
