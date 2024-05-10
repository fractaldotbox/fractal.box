import { Grid, makeStyles, Typography } from '@material-ui/core';

export type ArticleCardProps = { link: string, title: string; imgSrc: string; content: string };

const useStyles = makeStyles((theme) => ({
  root: { width: '100%' },
  image: {
    height: 'auto',
    display: 'inline-flex'
  },
  title: {
    marginTop: '0.625rem',
    minHeight: '6.3rem',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
      '& > h3': {
        fontSize: '1.75rem'
      }
    }
  },
  content: {
    marginTop: '0.938rem',
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      marginTop: '0.625rem'
    }
  }
}));

const ArticleCard = ({
  link, title, imgSrc, content
}: ArticleCardProps) => {
  const classes = useStyles();
  return (
    <a href={link} title={`go to ${title} article page`}>
      <Grid component="article" container direction="column" className={classes.root}>
        <Grid item className={classes.image}>
          <img src={imgSrc} alt={title} width="448" height="266" loading="lazy" />
        </Grid>
        <Grid item className={classes.title}>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="secondary" className={classes.content}>
            {content}
          </Typography>
        </Grid>
      </Grid>
    </a>
  );
};

export default ArticleCard;
