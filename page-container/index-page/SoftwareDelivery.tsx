import {
  Box, Grid, makeStyles, Typography
} from '@material-ui/core';
import { useMemo } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      '& > section:nth-child(2)': {
        marginTop: '1.25rem'
      }
    }
  },
  header: {
    display: 'table-caption',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  listRoot: {
    borderTop: '1px',
    borderTopStyle: 'solid',
    color: theme.palette.secondary.main,
    marginTop: '1.25rem',
    paddingTop: '1.625rem',
    lineHeight: '2',
    paddingLeft: '2rem'
  },
  listItem: {
    '&::marker': {
      fontSize: '1.3rem'
    }
  }
}));

const SoftwareDelivery = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();
  const listContent = useMemo(
    () => [
      'We’ve been through it.',
      'After sweats and tears, your startup is taking off,',
      'but then stuck at technical execution.',
      'Next round of funding is ticking.',
      'You need experienced and competent Tech-Lead who understand your business and walk the talk.',
      'Now.'
    ].map((content) => (
      <Box key={content}>
        <Typography component="p" variant="subtitle2" color="secondary">
          {content}
        </Typography>
      </Box>
    )),
    []
  );
  return (
    <Grid container component="article" className={[className, classes.root].join(' ')}>
      <Grid item component="section" md={6} xs={12}>
        <Typography variant="h2" color="primary" className={classes.header}>
          PROBLEM
          <br />
          OF
          <br />
          SOFTWARE DELIVERY
        </Typography>
      </Grid>
      <Grid item component="section" md={6} xs={12}>
        <Typography variant="h3" color="primary">
          Your Rocket startup or project
          <br />
          needs a Rocket Engine.
        </Typography>
        <Box component="ul" className={classes.listRoot}>
          {listContent}
        </Box>
      </Grid>
    </Grid>
  );
};

export default SoftwareDelivery;
