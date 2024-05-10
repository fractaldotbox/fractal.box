import Head from 'next/head';
import IndexPageContainer from 'fractal-pages/index-page/IndexPageContainer';

const description = 'Architecting software, teams, companies and dreams';

function HomePage() {
  return (
    <>
      <Head>
        <title>Fractal Labs</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Fractal Labs" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://fractal.box/og_logo_592_310.png" />
        <link rel="preload" as="image" href="/hero_image.jpg" />
      </Head>
      <IndexPageContainer />
    </>
  );
}

export default HomePage;
