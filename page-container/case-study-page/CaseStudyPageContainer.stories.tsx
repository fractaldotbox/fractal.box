import { Story, Meta } from '@storybook/react';
import CaseStudyPageContainer, {
  CaseStudyPageProps
} from './CaseStudyPageContainer';
import { Default as MarkdownArticle } from './MarkdownArticle.stories';

export default {
  title: 'page/CaseStudyPage',
  component: CaseStudyPageContainer
} as Meta;

const Template: Story<CaseStudyPageProps> = ({
  title,
  heroImageSrc,
  highlight,
  content
}: CaseStudyPageProps) => (
  <CaseStudyPageContainer
    title={title}
    heroImageSrc={heroImageSrc}
    highlight={highlight}
    content={content}
  />
);

export const Default = Template.bind({});
Default.args = {
  ...MarkdownArticle.args
};
