import { Story, Meta } from '@storybook/react';
import MarkdownArticle, { MarkdownArticleProps } from './MarkdownArticle';

export default {
  title: 'case-study/MarkdownArticle',
  component: MarkdownArticle
} as Meta;

const Template: Story<MarkdownArticleProps> = ({
  title, heroImageSrc, highlight, content
}: MarkdownArticleProps) => (
  <MarkdownArticle title={title} heroImageSrc={heroImageSrc} highlight={highlight} content={content} />
);

const contentExample = `Our partner Vincent Lau, lead the development of reservation systems and IoT integrations of the award winning sleeping pod, during his time with Space is Ltd.

SLEEEP is a capsule hotel in Central, Hong Kong. It is a space for people to recharge in this city that never sleeps.

Being CTO=the Tech Guy, Vincent’s work is to make technologies creating the experience, replacing friction with warmth. Booking app - EXP to reserve your next sleeping timeslot right away. QR Code as key to entry, with your SLPer(capsule) & locker then welcoming you with blinks. Slowly glowing light as alarm to adjust you from your sleep cycles.

WebApp
#Angular #NodeJS #PostgresSQL #AWS

IoT
#AWS Lambda #NodeJS #Philips Hue/Raspberry Pi for IoT
`;

export const Default = Template.bind({});
Default.args = {
  title: 'SLEEEP by Space is Ltd',
  heroImageSrc: '/case_sleeep.jpg',
  highlight: 'Red Dot Design Awards 18’',
  content: contentExample
};
