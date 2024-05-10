import {
  Box,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Header, Footer } from 'pedialab-shared/components';

const useStyle = makeStyles((theme) => ({
  root: {
    '& > p:first-of-type': {
      marginTop: '9.4rem',
      marginBottom: '1.25rem',
      [theme.breakpoints.down('sm')]: {
        marginTop: '5.188rem'
      }
    },
    '& > :last-child': {
      marginTop: '14.125rem',
      [theme.breakpoints.down('sm')]: {
        marginTop: '9.4rem'
      }
    }
  }
}));

const ThankYouPageContainer = () => {
  const classes = useStyle();
  return (
    <>
      <Box mx={{ xs: '5.8%', md: '10%' }}>
        <Grid container direction="column" justify="center" className={classes.root}>
          <Header />
          <Typography align="center" component="p" variant="h2" color="primary">Thank you</Typography>
          <Typography align="center" component="p" variant="h3" color="primary">We will get in touch with you shortly</Typography>
          <Footer />
        </Grid>
      </Box>
    </>
  );
};

export default ThankYouPageContainer;
