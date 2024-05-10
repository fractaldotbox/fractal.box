import { Story, Meta } from '@storybook/react';
import OurTeam from './OurTeam';

export default {
  title: 'index/OurTeam',
  component: OurTeam
} as Meta;

const Template: Story = () => <OurTeam />;

export const Default = Template.bind({});
