import { GetStaticPaths } from 'next';
import Head from 'next/head';

import { loadAllMarkdownFileNames, loadMarkdownFile } from 'fractal-pages/case-study-page/lib-server';
import { matter } from 'fractal-pages/case-study-page/lib-iso';
import { CaseStudyPageContainer } from 'fractal-pages/case-study-page';
import packageConfig from '../../package.json';

type Params = {
  params: { title: string };
};

const getStaticPaths: GetStaticPaths = async () => {
  const articleTitles = loadAllMarkdownFileNames();

  const paths = articleTitles.map((articleTitle) => ({
    params: {
      title: articleTitle
    }
  }));

  return {
    paths,
    fallback: false
  };
};

type Props = {
  markdown: string;
};

const getStaticProps = async ({ params }: Params) => {
  const title = params.title;
  const markdown = await loadMarkdownFile(title);

  return {
    props: {
      markdown
    }
  };
};

export { getStaticPaths, getStaticProps };

const CaseStudyPage = ({ markdown }: Props) => {
  const caseStudy = matter(markdown);
  const content = caseStudy.content;
  const {
    title, heroImagePath, highlight, summary
  } = caseStudy.data;

  return (
    <>
      <Head>
        <title>
          {`Pedia Lab - ${title}`}
        </title>
        <meta name="description" content={summary} />
        <meta property="og:title" content={`Pedia Lab - ${title}`} />
        <meta property="og:description" content={summary} />
        <meta property="og:image" content={packageConfig.homepage.concat(heroImagePath)} />
        <link rel="preload" as="image" href={heroImagePath} />
      </Head>
      <CaseStudyPageContainer title={title} heroImageSrc={heroImagePath} highlight={highlight} content={content} />
    </>
  );
};

export default CaseStudyPage;
