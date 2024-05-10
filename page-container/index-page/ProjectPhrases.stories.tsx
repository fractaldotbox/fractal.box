import { Story, Meta } from '@storybook/react';
import ProjectPhrases from './ProjectPhrases';

export default {
  title: 'index/ProjectPhrases',
  component: ProjectPhrases
} as Meta;

const Template: Story = () => <ProjectPhrases />;

export const Default = Template.bind({});
