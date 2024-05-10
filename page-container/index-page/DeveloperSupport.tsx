import {
  Grid, Hidden, makeStyles, Typography
} from '@material-ui/core';
import LetsTalkButton from './LetsTalkButton';

const content = [
  {
    title: 'QA-as-a-Service & Browser Automation Testing',
    description: 'Both Manual + Auto to address resources gap during testing testing automations'
  },
  {
    title: 'Infrastructure setup for Kubernetes, with tools like Terraform ',
    description: 'Bridge gap in infra upgrade by complementing expertise in infrastructure '
  }
];

const useStyle = makeStyles((theme) => ({
  articleContainer: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  },
  textContent: {
    marginTop: '3.75rem',
    width: '30rem',
    '& > div:nth-child(2)': {
      marginTop: '1.11rem'
    },
    '& > div:nth-child(n+3)': {
      marginTop: '2.6rem',
      '& > :nth-child(3)': {
        marginTop: '0.75rem'
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 0
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      '& > div:nth-child(n+3)': {
        marginTop: '2.25rem'
      }
    }
  },
  image: {
    borderRadius: '60px',
    overflow: 'hidden',
    width: '30rem'
  },
  letsTalk: {
    marginTop: '9.375rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.75rem'
    }
  }
}));

const DeveloperSupport = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  return (
    <Grid className={[className, classes.articleContainer].join(' ')} component="article" container justify="space-between">
      <Grid item container direction="column" className={classes.textContent}>
        <Grid item>
          <Typography variant="h2" color="primary">
            Developer Support
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="secondary">
            Our team readily provide your team support in these areas which have steep learning curve and time consuming.
          </Typography>
        </Grid>
        {content.map((item, index) => (
          <Grid item key={item.title}>
            <Typography component="p" variant="button" color="primary">
              {`00${index + 1}`.slice(-2)}
            </Typography>
            <Typography component="p" variant="h3" color="primary">
              {item.title}
            </Typography>
            <Typography variant="body1" color="secondary">
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Hidden mdDown>
        <Grid item className={classes.image}>
          <img src="/developer_support.jpg" width="480" height="1040" alt="Developer Support" />
        </Grid>
      </Hidden>
      <Grid item container justify="center" className={classes.letsTalk}>
        <LetsTalkButton />
      </Grid>
    </Grid>
  );
};

export default DeveloperSupport;
