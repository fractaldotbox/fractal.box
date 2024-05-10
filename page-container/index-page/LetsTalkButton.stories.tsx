import { Story, Meta } from '@storybook/react';
import LetsTalkButton from './LetsTalkButton';

export default {
  title: 'index/LetsTalkButton',
  component: LetsTalkButton
} as Meta;

const Template: Story = ({ className }: Partial<{ className: string }>) => <LetsTalkButton className={className} />;

export const Default = Template.bind({});
