import { Story, Meta } from '@storybook/react';
import Member, { MemberProps } from './Member';

export default {
  title: 'shared/Member',
  component: Member
} as Meta;

const Template: Story<MemberProps> = ({ avatarSrc, name, position }: MemberProps) => <Member avatarSrc={avatarSrc} name={name} position={position} />;

export const Default = Template.bind({});
Default.args = {
  avatarSrc: '/avatar_vincent.jpg',
  name: 'Vincent Lau',
  position: 'Partner'
};
