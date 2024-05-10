import { Grid, makeStyles, Typography } from '@material-ui/core';
import LetsTalkButton from './LetsTalkButton';

type ServiceItemProps = {
  title: string;
  price: string;
  priceUnit: string;
  service: string[];
};

const content: ServiceItemProps[] = [
  {
    title: 'Team up',
    price: '8-64 hrs',
    priceUnit: '/month',
    service: [
      'Architecture Audit',
      'Strategy Meetings',
      'Team Coaching',
      'Office Hours',
      'Partnership Meetings'
    ]
  },
  {
    title: 'Developer Support',
    price: '$5k-$10k',
    priceUnit: '/month',
    service: [
      'Architecture Demo',
      'QA-as-a-Service',
      'Browser testing',
      'k8s/CICD setup',
      'Code Review'
    ]
  },
  {
    title: 'Project Delivery',
    price: '$15-$100k',
    priceUnit: '/project',
    service: [
      'Mobile Apps',
      'Ecommerce',
      'BI Analytics Tools',
      'Chatbots',
      'Data Engineering'
    ]
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2.625rem'
    }
  },
  serviceItem: {
    marginTop: '4.625rem',
    '& > ul': {
      listStyle: 'none',
      paddingLeft: 0,
      '& > li': {
        marginTop: '2.25rem',
        fontSize: '1.25rem'
      }
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      '& > ul': {
        textAlign: 'center'
      }
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: '3.438rem'
    }
  },
  price: {
    marginTop: '0.625rem',
    '& > :first-child': {
      color: '#ffffff',
      marginRight: '0.5rem'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      '& > :first-child': {
        fontSize: '3.75rem'
      },
      '& span': {
        display: 'inline-block'
      }
    }
  },
  letsTalk: {
    marginTop: '5.3125rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0
    }
  }
}));

const ServiceItem = ({
  title,
  price,
  priceUnit,
  service
}: ServiceItemProps) => {
  const classes = useStyles();
  return (
    <Grid item container xs={12} lg={4} direction="column" className={classes.serviceItem}>
      <Grid item>
        <Typography color="primary" variant="button">
          {title}
        </Typography>
      </Grid>
      <Grid component="p" item className={classes.price}>
        <Typography component="span" variant="h2">
          {price}
        </Typography>
        <Typography component="span" variant="caption" color="secondary">
          {priceUnit}
        </Typography>
      </Grid>
      <Grid item component="ul">
        {service.map((kind) => (
          <Typography component="li" color="secondary" key={kind}>
            {kind}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

const ProjectScopes = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();
  return (
    <Grid
      id="typical-project-scopes"
      container
      component="article"
      justify="space-between"
      className={[className, classes.root].join(' ')}
    >
      <Grid item xs={12} className={classes.title}>
        <Typography align="center" variant="h2" color="primary">
          Typical Project Scopes
        </Typography>
      </Grid>
      {
        content.map((item) => (
          <ServiceItem
            key={item.title}
            title={item.title}
            price={item.price}
            priceUnit={item.priceUnit}
            service={item.service}
          />
        ))
      }
      <Grid
        item
        sm={12}
        container
        justify="center"
        className={classes.letsTalk}
      >
        <LetsTalkButton />
      </Grid>
    </Grid>
  );
};

export default ProjectScopes;
