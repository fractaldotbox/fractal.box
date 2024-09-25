import { Typography, Grid, makeStyles } from '@material-ui/core';

const content = [
  {
    name: 'Kenneth Shek',
    title: 'Head of Projects at Animoca Brands',
    description:
      '“Vincent is instrumental in launching key projects and guiding technical direction for my team. Besides his craftsmanship in thoughtful and pragmatic solutions, his strong principles and ownership make him a reliable tech leader to deliver and his diverse background aided him to empathize with different stakeholders. He will thrive in places where strong execution is needed to deliver great products with impactful missions”'
  },
  {
    name: 'Jun Liao',
    title: 'Co-founder + CEO at X₀ Ltd,  creator of SLEEEP',
    description:
      '“Vincent displayed deep subject expertise, excellent problem solving skills, attention to detail and holistic thinking all-in-one. He consistently provides well reasoned recommendations for software architecture that not only solves technical challenges with long-term maintainability in mind, but also puts equal weight on business needs as well as quality user experience.“'
  },
  {
    name: 'Fung Ng',
    title: 'Chief Architect, Head of Process & Control at AIA',
    description:
      '“Vincent is proactive at work and passionate in technology. Eager to learn, pick up things with great pace and always bring new technologies to the team.”'
  },
  {
    name: 'Jake Choi',
    title: 'Chief of Product, Spaceship',
    description:
      '“Vincent’s strong technical skills together with his business sense take us to next level. His experience in startup saved us a huge amount of time and he always provide us both insights and actions.”'
  }
];

const useStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  title: {
    textAlign: 'center',
    marginBottom: '4rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2.5rem'
    }
  },
  sectionRoot: {
    width: '33.40%',
    marginBottom: '6rem',
    '& :last-child > p': {
      fontSize: '1.125rem',
      lineHeight: '1.555',
      textAlign: 'center',
      marginTop: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2.5rem',
      width: '100%'
    }
  }
}));

const Testimonial = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();

  return (
    <Grid component="article" container justify="space-around">
      <Grid item sm={12} className={classes.title}>
        <h2 className="text-2xl">
          Testimonial
        </h2>
      </Grid>
      {content.map((testimonial) => (
        <Grid component="section" className={classes.sectionRoot} key={testimonial.name} item container alignItems="center" direction="column">
          <Grid item>
            <Typography variant="h3" color="primary">
              {testimonial.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="p" variant="subtitle2" color="primary">
              {testimonial.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="secondary">{testimonial.description}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
export default Testimonial;
