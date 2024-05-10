import { Story, Meta } from '@storybook/react';
import CaseStudies from './CaseStudies';

export default {
  title: 'index/CaseStudies',
  component: CaseStudies
} as Meta;

const Template: Story = () => <CaseStudies />;

export const Default = Template.bind({});
