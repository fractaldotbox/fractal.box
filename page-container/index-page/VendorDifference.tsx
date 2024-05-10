import {
  Box, Grid, makeStyles, Typography
} from '@material-ui/core';
import { TextList } from 'pedialab-shared/components';
import LetsTalkButton from './LetsTalkButton';

const content = {
  vendor: {
    title: 'Typical Vendors',
    lists: [
      'They prioritize other clients, risking project completion and don’t understand startup needs.',
      'Core expertise is loss and your product becomes a black box to you. Investors show doubts.',
      'Your budget is spent on their sales and middle management.'
    ]
  },
  pedialab: {
    title: 'Pedia Lab',
    lists: [
      'We’re experienced startup founders and tech-lead that you can count on, committed to work with your team.',
      'Day to day you gain insights in technology related to your product and stay on top of the game.',
      'Your budget spent investing in technology at your company.'
    ]
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
      '& > section': {
        flexWrap: 'wrap',
        paddingLeft: '2.5vw',
        paddingRight: '2.5vw'
      },
      '& ul': {
        flex: '1 0 100%',
        marginTop: '0.5rem'
      }
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      '& > section': {
        paddingTop: '1.5rem',
        paddingLeft: '6vw',
        paddingRight: '6vw'
      },
      '& ul': {
        marginTop: '1.5rem'
      }
    }
  },
  firstSection: {
    borderRightStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.palette.secondary.main,
    paddingTop: '3.75rem',
    '& > h3': {
      width: 'min-content',
      height: 'max-content'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '2.75rem'
    },
    [theme.breakpoints.down('sm')]: {
      borderRightStyle: 'none',
      '& > h3': {
        width: 'max-content'
      }
    }
  },
  secondSection: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '40px',
    marginTop: '0.75rem',
    marginLeft: '0.75rem',
    paddingTop: '3rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
      margin: 0
    }
  },
  letsTalk: {
    marginTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.5rem'
    }
  }
}));

const VendorDifference = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center">
          <Typography variant="h3" color="primary">
         Tech Lead as a Service
          </Typography>
      </Grid>

      <Grid component="article" container wrap="nowrap" className={[className, classes.root].join(' ')}>
        <Grid component="section" className={classes.firstSection} item container wrap="nowrap" justify="space-evenly" lg={6} xs={12}>
          <Typography variant="h3" color="primary">
            {content.vendor.title}
          </Typography>
          <TextList texts={content.vendor.lists} width="18.4vw" />
        </Grid>
        <Grid component="section" className={classes.secondSection} item container wrap="nowrap" justify="space-evenly" lg={6} xs={12}>
          <Typography variant="h3" color="textPrimary">
            {content.pedialab.title}
          </Typography>
          <TextList texts={content.pedialab.lists} width="18.4vw" />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <LetsTalkButton className={classes.letsTalk} />
      </Grid>
    </>
  );
};

export default VendorDifference;
