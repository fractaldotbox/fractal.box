import { Story, Meta } from '@storybook/react';
import ArticleCard, { ArticleCardProps } from './ArticleCard';

export default {
  title: 'shared/ArticleCard',
  component: ArticleCard
} as Meta;

const Template: Story<ArticleCardProps> = ({
  title, imgSrc, content, link
}: ArticleCardProps) => <ArticleCard link={link} title={title} imgSrc={imgSrc} content={content} />;

export const Default = Template.bind({});
Default.args = {
  title: 'SLEEEP by Space is Ltd',
  imgSrc: '/case_sleeep.jpg',
  content: `Red Dot Design Awards 18’

   Our partner Vincent Lau, lead the development of reservation systems and IoT integrations of the award winning sleeping pod, during his time with Space is Ltd.`
};
