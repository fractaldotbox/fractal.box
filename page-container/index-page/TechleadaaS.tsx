import {
  Grid, Box, makeStyles, Typography
} from '@material-ui/core';
import { TextList } from 'pedialab-shared/components';

const useStyles = makeStyles((theme) => ({
  root: {
    borderTopLeftRadius: '40px',
    borderBottomLeftRadius: '40px',
    backgroundColor: '#333333',
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
      backgroundColor: 'transparent',
      flexDirection: 'column'
    }
  },
  textContainer: {
    marginTop: '1rem',
    alignSelf: 'center',
    '& > div': {
      marginTop: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > h3': {
        fontSize: '2.25rem',
        fontWeight: 300
      },
      '& > div': {
        marginTop: '3rem'
      }
    }
  },
  imgContainer: {
    borderRadius: '50px',
    overflow: 'hidden',
    width: '43.31%',
    transform: 'translate(0, -8.6%)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      transform: 'none'
    }
  }
}));

const content = [
  'Don’t let poor execution get in your way.',
  'Our tech-lead work closely with your team on architecture, coaching to provide you with hard-earned battlefield experiences.',
  'Grow with you your team, delegate non-core work and serve both short-term and long-term need.'
];

const TechleadaaS = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();

  return (
    <Grid container component="article" className={[className, classes.root].join(' ')} alignContent="center" justify="space-evenly">
      <Grid item xs={12} md="auto" className={classes.textContainer}>
        <Typography variant="h3" color="primary">
          Tech Lead as a Service
        </Typography>
        <Box>
          <TextList texts={content} textColor="primary.main" width={{ xs: '100%', sm: '22rem' }} />
        </Box>
      </Grid>
      <Grid item xs={12} md="auto" className={classes.imgContainer}>
        <img loading="lazy" width="1000" height="1500" src="/tech_lead_as_a_service.jpg" alt="" />
      </Grid>
    </Grid>
  );
};

export default TechleadaaS;
