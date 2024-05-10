import { Story, Meta } from '@storybook/react';
import NavList, { NavListProps } from './NavList';

export default {
  title: 'shared/NavList',
  component: NavList
} as Meta;

const Template: Story<NavListProps> = ({ items }: NavListProps) => (
  <NavList items={items} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    'About',
    'Pricing',
    'Team',
    'Case Studies',
    'Careers',
    'Contact'
  ].map((text) => ({ text, isActive: false }))
};
