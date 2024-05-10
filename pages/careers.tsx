import Head from 'next/head';
import CareerPageContainer from 'fractal-pages/careers-page/CareerPageContainer';

function CareersPage() {
  return (
    <>
      <Head>
        <title>Pedia Lab - Careers</title>
        <meta name="description" content="Join Pedia Lab" />
        <meta property="og:title" content="Pedia Lab - Careers" />
        <meta property="og:description" content="Join Pedia Lab" />
        <meta property="og:image" content="https://fractal.box/og_logo_592_310.png" />
      </Head>
      <CareerPageContainer />
    </>
  );
}

export default CareersPage;
