import { Typography, Grid, makeStyles } from '@material-ui/core';

const phrases = [
  {
    title: 'Project Start',
    description: 'Requirements & strategy discussions with founders or project leads.'
  },
  {
    title: 'Weekly Coworking',
    description: 'Weekly meetings and office hours to team up and provide coaching, architecture review & identify improvement areas'
  },
  {
    title: 'Weekly Dev Support',
    description: 'Offload chores work like testing/ infrastructure and boost productivity of your developers'
  },
  {
    title: 'Building your team',
    description: 'Recruit & Train up the team and develop expertise '
  }
];

const useStyle = makeStyles((theme) => ({
  list: {
    marginTop: '5.125rem',
    listStyleType: 'none',
    counterReset: 'count',
    padding: 0,
    '& > li': {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      counterIncrement: 'count',
      flexWrap: 'nowrap',
      '&::before': {
        content: 'counter(count)',
        ...theme.typography.h2,
        color: theme.palette.primary.main,
        paddingLeft: '2.5625rem',
        paddingRight: '2.5625rem'
      }
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.313rem',
      '& > li': {
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '0.75rem',
        '&::before': {
          padding: 0,
          width: '100%'
        }
      }
    }
  },
  textRoot: {
    marginTop: '0.75rem',
    '& :nth-child(n)': {
      marginBottom: '1.25rem'
    },
    '& :last-child': { // text content
      width: '62.91%'
    },
    [theme.breakpoints.down('sm')]: {
      '& :last-child': {
        textAlign: 'center',
        width: '100%'
      }
    }
  }
}));

const ProjectPhrases = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  return (
    <Grid container direction="column" component="article" className={className}>
      <Grid item>
        <Typography variant="h2" color="primary">
          Project Phrases
        </Typography>
      </Grid>
      <Grid component="ol" className={classes.list} item container direction="column">
        {phrases.map((step) => (
          <Grid component="li" item container key={step.title}>
            <Grid item component="section" className={classes.textRoot}>
              <Typography variant="h3" color="primary">
                {step.title}
              </Typography>
              <Typography variant="body1" color="secondary">
                {step.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectPhrases;
