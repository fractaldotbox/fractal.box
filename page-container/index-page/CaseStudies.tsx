import { Typography, Grid, makeStyles } from '@material-ui/core';
import { ArticleCardList, CommonButton } from 'fractal-shared/components';

const articleCards = [
  {
    link: '/case-study/mocaverse',
    title: 'Mocaverse NFT by Animoca Brands',
    imgSrc: '/case_mocaverse.jpg',
    content: `Animoca Brands completes @MocaverseNFT mint, an event during which Animoca Brands’ shareholders, employees, investees, partners, and supporters minted a total of 8,888 Mocaverse #NFTs, and sees 3,552 #ETH (US$5.5 million) sales volume in first 48 hours.`
  },
  {
    link: '/case-study/tinytap',
    title: 'Publisher NFTs by TinyTap, Animoca Brands',
    imgSrc: '/case_tinytap.png',

    content: `Animoca Brands & TinyTap launched first batch of six TinyTap Publisher NFTs sold at auction for a total of 138.926 ETH, generating a total 67.7 ETH for the six teachers who authored the content.`
  },
  {
    link: '/case-study/sleeep-by-space-is-ltd',
    title: 'SLEEEP by Space is Ltd',
    imgSrc: '/case_sleeep.jpg',
    content: `Red Dot Design Awards 18’
Our partner Vincent Lau, lead the development of reservation systems and IoT integrations of the award winning sleeping pod, during his time with Space is Ltd.`
  },
  {
    link: '/case-study/teaming-up-with-spaceship',
    title: 'Teaming up with Spaceship',
    imgSrc: '/case_spaceship.jpg',
    content:
      'One of the rapidly growing logistics startups in Hong Kong, Spaceship has urging need to increase their technical capacity for their next stage of growth.'
  },
  {
    link: '/case-study/teaming-up-with-stockviva',
    title: 'Teaming up with Stockviva',
    imgSrc: '/case_stockviva.png',
    content:
      'Leading social trading app that is rapidly expanding in Asia. Backed by Alibaba Entrepreneurs Fund, K3 Ventures, HK Science Park and others. Transformation in Architecture and DevOps pipelines was cruical to unblocking growth.'
  },
  {
    link: '/case-study/hypefest-by-hypebeast',
    title: 'HYPEFEST by Hypebeast',
    imgSrc: '/case_hypefest.jpg',
    content: 'Mobile App developed by ReactNative. For a 2 days event named HYPEFEST.'
  }
];

const useStyle = makeStyles((theme) => ({
  articleCardList: {
    marginTop: '5rem',
    '& + div': { // button container
      marginTop: '0.9375rem',
      [theme.breakpoints.down('sm')]: {
        marginTop: '0.188rem'
      }
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3.313rem'
    }
  }
}));

const CaseStudies = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  return (
    <Grid id="case-studies" container component="article" className="mt-4">
      <Grid item xs={12}>
        <Typography className="mb-3" variant="h2" color="textSecondary">
          Case Studies
        </Typography>
      </Grid>
      <Grid item className="text-center items-center justify-center">
        <ArticleCardList articleCards={articleCards} />
      </Grid>
      <Grid item container justify="center">
        <CommonButton title="Explore more of our work" href="/case-study" />
      </Grid>
    </Grid>
  );
};

export default CaseStudies;
