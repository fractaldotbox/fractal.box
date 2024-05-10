import { Story, Meta } from '@storybook/react';
import NavItem, { NavItemProps } from './NavItem';

export default {
  title: 'shared/NavItem',
  component: NavItem
} as Meta;

const Template: Story<NavItemProps> = ({ isActive, text, href }: NavItemProps) => <NavItem isActive={isActive} text={text} href={href} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Pricing'
};

export const Active = Template.bind({});
Active.args = {
  text: 'Career',
  isActive: true
};
