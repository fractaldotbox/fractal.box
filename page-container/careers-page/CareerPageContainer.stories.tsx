import { Story, Meta } from '@storybook/react';
import CareerPageContainer from './CareerPageContainer';

export default {
  title: 'page/CareerPage',
  component: CareerPageContainer
} as Meta;

const Template: Story = () => <CareerPageContainer />;

export const Default = Template.bind({});
