import Head from 'next/head';
import CareerPageContainer from 'fractal-pages/careers-page/CareerPageContainer';

function CareersPage() {
  return (
    <>
      <Head>
        <title>Fractal Box - Careers</title>
        <meta name="description" content="Join Fractal Box" />
        <meta property="og:title" content="Fractal Box - Careers" />
        <meta property="og:description" content="Join Fractal Box" />
        <meta property="og:image" content="https://fractal.box/og_logo_592_310.png" />
      </Head>
      <CareerPageContainer />
    </>
  );
}

export default CareersPage;
