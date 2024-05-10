import {
  Typography, Grid, makeStyles
} from '@material-ui/core';
import { markdownToReactComponent } from './lib-iso';

export type MarkdownArticleProps = {
  title: string;
  heroImageSrc: string;
  highlight: string;
  content: string;
};

const useStyle = makeStyles((theme) => ({
  titleContainer: {
    alignSelf: 'center',
    '& > h2': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.25rem',
        textAlign: 'center'
      }
    }
  },
  heroImage: {
    marginTop: '4rem',
    borderRadius: '20px',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.5rem'
    }
  },
  highlight: {
    marginTop: '2rem',
    marginBottom: '1.563rem',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: '#FF5C00',
    width: 'max-content',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.5rem',
      alignSelf: 'center'
    }
  }
}));

const StyledParagraph = ({ children }: { children: JSX.Element }) => (
  <Typography variant="body2" color="primary" component="p">
    {children}
  </Typography>
);

const MarkdownArticle = ({
  title, heroImageSrc, highlight, content
}: MarkdownArticleProps) => {
  const classes = useStyle();

  const componentMapper = {
    p: StyledParagraph
  };

  const contentElement = markdownToReactComponent(content, componentMapper);

  return (
    <Grid container component="article" direction="column" alignItems="center">
      <Grid item className={classes.titleContainer}>
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
      </Grid>
      <img className={classes.heroImage} src={heroImageSrc} width="960" height="570" alt={title} />
      <Grid item className={classes.highlight}>
        <Typography component="p" variant="subtitle1" color="primary">
          {highlight}
        </Typography>
      </Grid>
      <Grid item>{contentElement}</Grid>
    </Grid>
  );
};

export default MarkdownArticle;
