import Head from 'next/head';
import ThankYouPageContainer from 'fractal-pages/thank-you-page/ThankYouPageContainer';

function CareersPage() {
  return (
    <>
      <Head>
        <title>Pedia Lab - Thank You</title>
        <meta name="description" content="Thank you to contact us, we will get in touch with you shortly" />
        <meta property="og:title" content="Pedia Lab - Thank You" />
        <meta property="og:description" content="Thank you to contact us, we will get in touch with you shortly" />
        <meta property="og:image" content="https://fractal.box/og_logo_592_310.png" />
      </Head>
      <ThankYouPageContainer />
    </>
  );
}

export default CareersPage;
