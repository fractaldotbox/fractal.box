import {
  Grid, makeStyles, Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: '36.2%',
    marginTop: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  textContainer: {
    width: '67%',
    marginTop: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.25rem',
      width: '100%'
    }
  }
}));

const OurCompany = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" component="article" className={className + " mb-10"} id="our-company">

      <Typography component="h3" variant="h2" color="primary">
        The Fractal Box
        Difference
      </Typography>
      <br />
      <Typography component="p" variant="body1" color="secondary">
        Why employ Tech Lead as a service to grow together instead of just outsourcing?
      </Typography>
      <Grid item className={classes.imageContainer}>
        <div className="avatar w-48">
          <img className="rounded-full" src="/logo_fractal_labs.png" alt="our company introduction logo" />
        </div>
      </Grid>

      <Grid item className={classes.imageContainer}>

      </Grid>

      <Grid item className="w-full">
        <Typography variant="body1" color="secondary">
          We are a team of ex-startup founders & tech-leads, who understand both the power of technology and trade-offs to make in fast paced startups or
          innovative projects.
        </Typography>
        <br />
        <Typography variant="body1" color="secondary">
          We are on a mission to democratize great Product engineering, Data-driven mindset and Agile culture for entrepreneurs to build their products and dreams,
          building with best open source technologies and community support.
        </Typography>
        <br />
        <Typography variant="body1" color="secondary">
          We only work with clients and projects that are making a difference, at various stages in their journey from seed to IPO.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OurCompany;
