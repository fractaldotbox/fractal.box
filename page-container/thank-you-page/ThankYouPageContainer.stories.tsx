import { Story, Meta } from '@storybook/react';
import ThankYouPageContainer from './ThankYouPageContainer';

export default {
  title: 'page/ThankYouPage',
  component: ThankYouPageContainer
} as Meta;

const Template: Story = () => <ThankYouPageContainer />;

export const Default = Template.bind({});
