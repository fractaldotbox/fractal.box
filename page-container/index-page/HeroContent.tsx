import {
  Grid, Box, makeStyles, Typography, Hidden
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroImageContainer: {
    marginTop: '2.5rem',
    borderRadius: '40px',
    overflow: 'hidden',
    '& > img': {
      filter: 'grayscale(1)'
    }
  },
  contentContainer: {
    width: 'max-content',
    marginTop: '8rem',
    marginLeft: '34.46%',
    '& > p': {
      maxWidth: '27.43vw',
      marginTop: '1.5rem'
    },
    '& > div': {
      marginTop: '4rem',
      borderRadius: '60px',
      overflow: 'hidden',
      maxWidth: 'max-content'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      alignItems: 'center',
      marginTop: '5.625rem',
      marginLeft: 0,
      textAlign: 'center',
      '& > p': {
        maxWidth: 'max-content',
        marginTop: '1rem'
      },
      '& > div': {
        marginTop: '2.5rem'
      }
    }
  }
}));

const HeroContent = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" component="article" className={className}>
      <Grid item xs={12}>
        <Typography variant="h2" color="primary">
          Architecting software, teams,
          <Hidden smDown><br /></Hidden>
          companies and dreams
        </Typography>
      </Grid>
      <Grid item xs={12} className="container">
        <img
          srcSet="/hero_image.jpg 1440w, /hero_image_mobile.png 730w"
          sizes="(max-width: 960px) 88.4vw, 80vw"
          src="/hero_image.jpg"
          width="1440"
          height="716"
          alt="index hero, two building with light on"
        />
      </Grid>
    </Grid>
  );
};

export default HeroContent;
