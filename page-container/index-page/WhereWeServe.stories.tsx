import { Story, Meta } from '@storybook/react';
import WhereWeServe from './WhereWeServe';

export default {
  title: 'index/WhereWeServe',
  component: WhereWeServe
} as Meta;

const Template: Story = () => <WhereWeServe />;

export const Default = Template.bind({});
