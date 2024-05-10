import { Grid, makeStyles, Typography } from '@material-ui/core';
import LetsTalkButton from './LetsTalkButton';

const content = {
  title: 'WHERE WE SERVE',
  subtitle: 'Remote + On-site Supported ',
  description: `Our team is located in Hong Kong, Singapore, Taipei and Hanoi.
Experienced UX & Product Designers, Senior Backend Developers, Site Reliability Engineers are ready to work on your project.`
};

const useStyles = makeStyles((theme) => ({
  article: {
    width: '28.75rem',
    '& > h2': {
      marginTop: '4.875rem'
    },
    '& > p:nth-child(2)': {
      marginTop: '1.5rem'
    },
    '& > p:nth-child(3)': {
      marginTop: '1rem'
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      marginLeft: '5.8%',
      marginRight: '5.8%',
      width: '100%',
      alignItems: 'center',
      '& > h2': {
        marginTop: '2.5rem'
      },
      '& > p:nth-child(2)': {
        marginTop: '1.75rem'
      },
      '& > p:nth-child(3)': {
        marginTop: '1rem',
        textAlign: 'center'
      }
    }
  },
  letsTalkButton: {
    marginTop: '3rem',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  }
}));

const WhereWeServe = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();
  const { title, subtitle, description } = content;
  return (
    <Grid container justify="space-between" className={className}>
      <Grid item xs="auto" md={6} lg="auto">
        <img src="/map.jpg" width="507" height="734" alt="where we serve map" />
      </Grid>
      <Grid
        item
        container
        direction="column"
        component="article"
        className={classes.article}
        xs={10}
        md={6}
        lg="auto"
      >
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
        <Typography component="p" variant="h3" color="primary">
          {subtitle}
        </Typography>
        <Typography variant="body1" color="secondary">
          {description}
        </Typography>
        <LetsTalkButton className={classes.letsTalkButton} />
      </Grid>
    </Grid>
  );
};

export default WhereWeServe;
