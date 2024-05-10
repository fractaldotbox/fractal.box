import { Story, Meta } from '@storybook/react';
import IndexPageContainer from './IndexPageContainer';

export default {
  title: 'page/IndexPage',
  component: IndexPageContainer
} as Meta;

const Template: Story = () => <IndexPageContainer />;

export const Default = Template.bind({});
