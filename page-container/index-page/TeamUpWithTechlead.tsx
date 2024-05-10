import {
  Grid, makeStyles, Typography, Hidden
} from '@material-ui/core';

type ItemProps = {
  imgSrc: string;
  title: string;
  description: string;
};

const content: ItemProps[] = [
  {
    imgSrc: '/icon_architecture.svg',
    title: 'Architecture',
    description: 'Lower overall development cost & risk by applying right architecture for the job, from our battlefield experience'
  },
  {
    imgSrc: '/icon_recruitment.svg',
    title: 'Recruitment & Coaching',
    description: 'Recruitment is hard. We help to identify, interview and coach talents that fit your team culture.'
  },
  {
    imgSrc: '/icon_strategy.svg',
    title: 'Strategy & Partnership Meetings',
    description: 'From investor meetings, strategic planning to vendor or partnership meetings, we provide you the technical advice you needed on the spot.'
  }
];

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    [theme.breakpoints.down('md')]: {
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  itemRoot: {
    width: '18.75rem',
    marginTop: '6.6875rem',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '2.5rem',
      width: '32%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  svgImage: {
    width: '5rem'
  },
  title: {
    minHeight: '9.6rem',
    marginTop: '1.5rem',
    [theme.breakpoints.down('md')]: {
      minHeight: 'auto'
    }
  },
  description: {
    marginTop: '1.5rem'
  }
}));

const Item = ({ imgSrc, title, description }: ItemProps) => {
  const classes = useStyles();
  return (
    <Grid item container direction="column" className={classes.itemRoot}>
      <Grid item className={classes.svgImage}>
        <img src={imgSrc} alt={title} width="80" height="80" loading="lazy" />
      </Grid>
      <Grid item className={classes.title}>
        <Typography component="p" variant="h3" color="primary">
          {title}
        </Typography>
      </Grid>
      <Grid item className={classes.description}>
        <Typography variant="body1" color="secondary">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export type TeamUpWithTechleadProps = {
  className?: string;
};

const TeamUpWithTechlead = ({ className }: TeamUpWithTechleadProps) => {
  const classes = useStyles();
  return (
    <Grid container component="article" justify="space-between" className={[className, classes.articleContainer].join(' ')}>
      <Grid item sm={12}>
        <Typography align="center" variant="h2" color="primary">
          Team up with&nbsp;
          <Hidden lgUp><br /></Hidden>
          Tech-Lead in a nutshell
        </Typography>
      </Grid>
      {content.map((item) => (
        <Item key={item.title} title={item.title} imgSrc={item.imgSrc} description={item.description} />
      ))}
    </Grid>
  );
};

export default TeamUpWithTechlead;
