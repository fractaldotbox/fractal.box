import { Story, Meta } from '@storybook/react';
import Header, { HeaderProps } from './Header';

export default {
  title: 'shared/Header',
  component: Header
} as Meta;

const Template: Story<HeaderProps> = ({ isActivatedOrder }: HeaderProps) => (
  <Header isActivatedOrder={isActivatedOrder} />
);

export const Default = Template.bind({});

export const WithActivated = Template.bind({});
WithActivated.args = {
  isActivatedOrder: 1
};
