import { Story, Meta } from '@storybook/react';
import CaseStudiesPageContainer from './CaseStudiesPageContainer';

export default {
  title: 'page/CaseStudiesPage',
  component: CaseStudiesPageContainer
} as Meta;

const Template: Story = () => <CaseStudiesPageContainer articleCards={[]} />;

export const Default = Template.bind({});
