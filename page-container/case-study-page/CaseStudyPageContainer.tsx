import {
  Box, Grid, makeStyles
} from '@material-ui/core';
import { Header, Footer } from 'fractal-shared/components';
import { MarkdownArticle } from 'fractal-pages/case-study-page';

export type CaseStudyPageProps = {
  title: string;
  heroImageSrc: string;
  highlight: string;
  content: string;
};

const useStyle = makeStyles((theme) => ({
  title: {
    marginTop: '5rem',
    alignSelf: 'center',
    color: theme.palette.secondary.main,
    fontSize: '1.125rem'
  },
  articleContainer: {
    alignSelf: 'center',
    marginLeft: '6.3%',
    marginRight: '6.3%',
    marginTop: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  footer: {
    marginTop: '9.4rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '7.813rem'
    }
  }
}));

const CaseStudyPage = ({
  title,
  heroImageSrc,
  highlight,
  content
}: CaseStudyPageProps) => {
  const classes = useStyle();
  return (
    <>
      <Box mx={{ xs: '5.8%', md: '10%' }}>
        <Grid container direction="column">
          <Header isActivatedOrder={3} />
          <Box className={classes.title}>
            Case Study
          </Box>
          <Box className={classes.articleContainer}>
            <MarkdownArticle
              title={title}
              heroImageSrc={heroImageSrc}
              highlight={highlight}
              content={content}
            />
          </Box>
          <Footer className={classes.footer} />
        </Grid>
      </Box>
    </>
  );
};

export default CaseStudyPage;
