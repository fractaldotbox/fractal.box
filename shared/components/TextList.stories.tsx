import { Story, Meta } from '@storybook/react';
import TextList, { TextListProps } from './TextList';

export default {
  title: 'shared/TextList',
  component: TextList
} as Meta;

const Template: Story<TextListProps> = ({
  texts,
  width,
  textColor
}: TextListProps) => (
  <TextList texts={texts} width={width} textColor={textColor} />
);

export const Default = Template.bind({});
Default.args = {
  texts: [
    'We’re experienced texts and demo, committed to work with your team, persons you can count on.',
    'Day to day you gain insights in technology related to your Product and stay on top of the game.',
    'Your budget spent investing in technology at your company.'
  ]
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...Default.args,
  width: '50rem'
};
